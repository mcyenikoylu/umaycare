using umaycare.core.Entities;

namespace umaycare.core.DTOs.Auth;

/// <summary>
/// Register request DTO
/// </summary>
public class RegisterRequestDto
{
    public string Email { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? PhoneNumber { get; set; }
    public UserRole Role { get; set; } = UserRole.Mother;
    public string PreferredLanguage { get; set; } = "en"; // Default to English, Secondary Turkish, Macedonian
}
