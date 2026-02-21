using umaycare.core.Entities;

namespace umaycare.core.Interfaces;

/// <summary>
/// User repository interface for user-specific operations
/// </summary>
public interface IUserRepository : IRepository<User>
{
    Task<User?> GetByEmailAsync(string email);
    Task<bool> EmailExistsAsync(string email);
    Task<User?> GetByRefreshTokenAsync(string refreshToken);
}
