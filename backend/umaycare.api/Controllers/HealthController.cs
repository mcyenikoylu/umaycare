using Microsoft.AspNetCore.Mvc;

namespace umaycare.api.Controllers;

/// <summary>
/// Health check controller for API status
/// </summary>
[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    /// <summary>
    /// Check API health status
    /// </summary>
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Version = "1.26.0.0",
            Service = "Umay Care API"
        });
    }

    /// <summary>
    /// Detailed health check
    /// </summary>
    [HttpGet("details")]
    public IActionResult GetDetails()
    {
        return Ok(new
        {
            Status = "Healthy",
            Timestamp = DateTime.UtcNow,
            Version = "1.26.0.0",
            Service = "Umay Care API",
            Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") ?? "Production",
            MachineName = Environment.MachineName,
            ProcessorCount = Environment.ProcessorCount
        });
    }
}
