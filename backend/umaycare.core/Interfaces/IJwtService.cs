namespace umaycare.core.Interfaces;

/// <summary>
/// JWT token service interface
/// </summary>
public interface IJwtService
{
    string GenerateAccessToken(Guid userId, string email, string role);
    string GenerateRefreshToken();
    bool ValidateToken(string token);
}
