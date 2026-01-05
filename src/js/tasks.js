import { loadTasks, saveTasks } from './local-storage-api';

export function addTask(task) {
  const tasks = loadTasks();
  tasks.push(task);
  saveTasks(tasks);
  return tasks;
}

export function deleteTask(index) {
  const tasks = loadTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  return tasks;
}
