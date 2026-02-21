using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using umaycare.core.DTOs.Auth;
using umaycare.core.DTOs.Common;
using umaycare.core.Interfaces;

namespace umaycare.api.Controllers;

/// <summary>
/// User profile controller for authenticated users
/// </summary>
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class UsersController : ControllerBase
{
    private readonly IUserRepository _userRepository;

    public UsersController(IUserRepository userRepository)
    {
        _userRepository = userRepository;
    }

    /// <summary>
    /// Get current user's profile
    /// </summary>
    [HttpGet("me")]
    [ProducesResponseType(typeof(ApiResponse<UserDto>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
    public async Task<IActionResult> GetCurrentUser()
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (string.IsNullOrEmpty(userId) || !Guid.TryParse(userId, out var userGuid))
        {
            return Unauthorized(ApiResponse.ErrorResponse("Invalid token"));
        }

        var user = await _userRepository.GetByIdAsync(userGuid);

        if (user == null)
        {
            return NotFound(ApiResponse.ErrorResponse("User not found"));
        }

        var userDto = new UserDto
        {
            Id = user.Id,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
            PhoneNumber = user.PhoneNumber,
            ProfileImageUrl = user.ProfileImageUrl,
            Role = user.Role,
            IsEmailVerified = user.IsEmailVerified,
            PreferredLanguage = user.PreferredLanguage
        };

        return Ok(ApiResponse<UserDto>.SuccessResponse(userDto));
    }
}
