export default function addTask(tasks) {
  const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  tasksArray.push(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
  return tasksArray;
}

export function deleteTask(index) {
  const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  tasksArray.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
  return tasksArray;
}
