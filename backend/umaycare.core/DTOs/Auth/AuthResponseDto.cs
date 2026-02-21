using umaycare.core.Entities;

namespace umaycare.core.DTOs.Auth;

/// <summary>
/// Authentication response DTO
/// </summary>
public class AuthResponseDto
{
    public bool Success { get; set; }
    public string? Message { get; set; }
    public string? AccessToken { get; set; }
    public string? RefreshToken { get; set; }
    public DateTime? ExpiresAt { get; set; }
    public UserDto? User { get; set; }
}

/// <summary>
/// User DTO for API responses
/// </summary>
public class UserDto
{
    public Guid Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string? PhoneNumber { get; set; }
    public string? ProfileImageUrl { get; set; }
    public UserRole Role { get; set; }
    public bool IsEmailVerified { get; set; }
    public string PreferredLanguage { get; set; } = "en";
}
