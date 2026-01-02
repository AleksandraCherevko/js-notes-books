import { loadTasks, saveTasks } from './local-storage-api';

let tasks = loadTasks();

export function getTasks() {
  return tasks;
}

export function addTask(task) {
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
}

export function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks(tasks);
  return tasks;
}
