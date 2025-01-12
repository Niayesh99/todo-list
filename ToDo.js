import { Task } from "./task.js";

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  adding(title, dueDate, status) {
    const newTask = new Task(title, dueDate, status);
    this.tasks.push(newTask);
  }

  deleteTask(title) {
    const index = this.tasks.findIndex((task) => task.title === title);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(`Task with title "${title}" has been removed.`);
    } else {
      console.log(`Task with title "${title}" not found.`);
    }
  }
  markAsCompleted(title) {
    const task = this.tasks.find((task) => task.title === title);
    if (task) {
      task.status = "completed";
      console.log(`Task "${title}" marked as completed.`);
    } else {
      console.log(`Task "${title}" not found.`);
    }
  }
  displayAllTasks() {
    this.tasks.forEach((task) => {
      console.log(
        `Title: ${task.title}, Due Date: ${task.dueDate}, Status: ${task.status}`
      );
    });
  }
}
const myTask=new Task( 'learn Deutsch', "25.01 ", "pending")
const jsonString = JSON.stringify(myTask);
console.log(jsonString);

