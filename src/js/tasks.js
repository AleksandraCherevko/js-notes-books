
export default function addTask(tasks) {
  const tasksArray = JSON.parse(localStorage.getItem('tasks')) || [];
  tasksArray.push(tasks);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
}
