import { Task } from './task.js';

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  adding(title, dueDate, status) {
    const newTask = new Task(title, dueDate, status);
    this.tasks.push(newTask);
  }

  deleteTask(title) {
    const index = this.tasks.findIndex(task => task.title === title);
    if (index !== -1) {
      this.tasks.splice(index, 1);  
      console.log(`Task with title "${title}" has been removed.`);
    } else {
      console.log(`Task with title "${title}" not found.`);
    }
  }
}



