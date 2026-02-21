using Mailjet.Client;
using Mailjet.Client.Resources;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using umaycare.core.Interfaces;

namespace umaycare.infrastructure.Services;

/// <summary>
/// Email service implementation using Mailjet
/// </summary>
public class EmailService : IEmailService
{
    private readonly IConfiguration _configuration;
    private readonly string _apiKey;
    private readonly string _apiSecret;
    private readonly string _senderEmail;
    private readonly string _senderName;

    public EmailService(IConfiguration configuration)
    {
        _configuration = configuration;
        _apiKey = _configuration["Mailjet:ApiKey"] ?? throw new ArgumentNullException("Mailjet:ApiKey not configured");
        _apiSecret = _configuration["Mailjet:ApiSecret"] ?? throw new ArgumentNullException("Mailjet:ApiSecret not configured");
        _senderEmail = _configuration["Mailjet:SenderEmail"] ?? "noreply@umaycare.com";
        _senderName = _configuration["Mailjet:SenderName"] ?? "Umay Care";
    }

    public async Task SendEmailAsync(string to, string subject, string body)
    {
        var client = new MailjetClient(_apiKey, _apiSecret);

        var request = new MailjetRequest
        {
            Resource = Send.Resource
        }
        .Property(Send.FromEmail, _senderEmail)
        .Property(Send.FromName, _senderName)
        .Property(Send.Subject, subject)
        .Property(Send.HtmlPart, body)
        .Property(Send.Recipients, new JArray
        {
            new JObject { { "Email", to } }
        });

        await client.PostAsync(request);
    }

    public async Task SendWelcomeEmailAsync(string to, string firstName)
    {
        var subject = "Welcome to Umay Care";
        var body = GetEmailTemplate("Welcome", new Dictionary<string, string>
        {
            { "FirstName", firstName }
        });

        await SendEmailAsync(to, subject, body);
    }

    public async Task SendPasswordResetEmailAsync(string to, string resetToken)
    {
        var subject = "Reset Your Password - Umay Care";
        var resetLink = $"{_configuration["App:BaseUrl"]}/reset-password?token={resetToken}";
        var body = GetEmailTemplate("PasswordReset", new Dictionary<string, string>
        {
            { "ResetLink", resetLink }
        });

        await SendEmailAsync(to, subject, body);
    }

    public async Task SendEmailVerificationAsync(string to, string verificationToken)
    {
        var subject = "Verify Your Email - Umay Care";
        var verifyLink = $"{_configuration["App:BaseUrl"]}/verify-email?token={verificationToken}";
        var body = GetEmailTemplate("EmailVerification", new Dictionary<string, string>
        {
            { "VerifyLink", verifyLink }
        });

        await SendEmailAsync(to, subject, body);
    }

    private string GetEmailTemplate(string templateName, Dictionary<string, string> replacements)
    {
        // Load template from embedded resources or use default
        var template = templateName switch
        {
            "Welcome" => $@"
                <html>
                <body style='font-family: Arial, sans-serif;'>
                    <h1>Welcome to Umay Care!</h1>
                    <p>Hello {{FirstName}},</p>
                    <p>Thank you for joining Umay Care. We're excited to have you on board!</p>
                    <p>Best regards,<br/>The Umay Care Team</p>
                </body>
                </html>",
            "PasswordReset" => $@"
                <html>
                <body style='font-family: Arial, sans-serif;'>
                    <h1>Reset Your Password</h1>
                    <p>Click the link below to reset your password:</p>
                    <p><a href='{{ResetLink}}'>Reset Password</a></p>
                    <p>If you didn't request this, please ignore this email.</p>
                    <p>Best regards,<br/>The Umay Care Team</p>
                </body>
                </html>",
            "EmailVerification" => $@"
                <html>
                <body style='font-family: Arial, sans-serif;'>
                    <h1>Verify Your Email</h1>
                    <p>Click the link below to verify your email address:</p>
                    <p><a href='{{VerifyLink}}'>Verify Email</a></p>
                    <p>Best regards,<br/>The Umay Care Team</p>
                </body>
                </html>",
            _ => string.Empty
        };

        foreach (var replacement in replacements)
        {
            template = template.Replace($"{{{{{replacement.Key}}}}}", replacement.Value);
        }

        return template;
    }
}
