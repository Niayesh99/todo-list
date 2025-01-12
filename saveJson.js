import { Task } from "./task.js";
import fs from "fs";
import ToDoList from "./ToDo.js";

const toDos = new ToDoList();
const myTask = new Task("learn x", "25.02", "pending");
const myTask1 = new Task("learn y", "25.03", "pending");
const myTask2 = new Task("learn a", "25.04", "pending");
const myTask3 = new Task("learn b", "25.05", "pending");

toDos.addNewTask(myTask);
toDos.addNewTask(myTask1);
toDos.addNewTask(myTask2);
toDos.addNewTask(myTask3);


fs.writeFile("tasks.json", jsonString, (err) => {
  if (err) {
    console.log("Error writing file", err);
  } else {
    console.log("File saved successfully as tasks.json");
  }
});

