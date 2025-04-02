using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskManager.API.Data;
using TaskManager.API.Models;

namespace TaskManager.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly ILogger<TasksController> _logger;

    public TasksController(AppDbContext context, ILogger<TasksController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // GET: api/tasks
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TaskItem>>> GetTasks()
    {
        var devName = Request.Headers["Developer-Name"].ToString();
        _logger.LogInformation("GET /api/tasks by {DeveloperName}", devName);

        return await _context.Tasks.ToListAsync();
    }

    // POST: api/tasks
    [HttpPost]
    public async Task<ActionResult<TaskItem>> AddTask(TaskItem task)
    {
        Console.WriteLine("🔍 הגעתי ל-POST AddTask");

        var devName = Request.Headers["Developer-Name"].ToString();
        _logger.LogInformation("POST /api/tasks by {DeveloperName}", devName);

        if (string.IsNullOrWhiteSpace(task.Title))
            return BadRequest("Title is required.");
        if (task.DueDate.Date < DateTime.Now.Date)
            return BadRequest("Due date must be today or in the future.");

        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateTask(int id, TaskItem updatedTask)
    {
        var devName = Request.Headers["Developer-Name"].ToString();
        _logger.LogInformation("PUT /api/tasks/{id} by {DeveloperName}", id, devName);

        var task = await _context.Tasks.FindAsync(id);
        if (task == null)
            return NotFound();

        task.Title = updatedTask.Title;
        task.Description = updatedTask.Description;
        task.DueDate = updatedTask.DueDate;
        task.Completed = updatedTask.Completed; // 💥 חשוב!

        await _context.SaveChangesAsync();

        return NoContent();
    }

    // DELETE: api/tasks/{id}
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var devName = Request.Headers["Developer-Name"].ToString();
        _logger.LogInformation("DELETE /api/tasks/{id} by {DeveloperName}", id, devName);

        var task = await _context.Tasks.FindAsync(id);
        if (task == null)
            return NotFound();

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
