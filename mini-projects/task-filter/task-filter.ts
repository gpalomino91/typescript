/*# Task Filter (TypeScript)*/

class TaskManager {
  public tasks: Task[] = [];
  
  constructor(params) {}

  filterByStatus(status: boolean): Task[] {
      return this.tasks.filter(task => task.completed === status);
  }

  addTask(newTask: Task): string {
    this.tasks.push(newTask);
    return "Task added";
  }

  deleteTask(taskId: number): string {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
    return Task ${taskId} deleted;
  }
}
