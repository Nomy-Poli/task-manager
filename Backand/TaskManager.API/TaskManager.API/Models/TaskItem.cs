namespace TaskManager.API.Models
{public class TaskItem
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Description { get; set; }
    public DateTime DueDate { get; set; }
    public bool Completed { get; set; } = false;

    }

}


