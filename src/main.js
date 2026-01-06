import { refs } from './js/refs';
import { addTask, deleteTask } from './js/tasks';
import renderTasks from './js/render-tasks';
import { loadTasks } from './js/local-storage-api';
import './js/theme-switcher';

renderTasks(loadTasks());

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleDelete);

function handleSubmit(event) {
  event.preventDefault();

  const { taskName, taskDescription } = event.target.elements;

  if (!taskName.value.trim() || !taskDescription.value.trim()) {
    alert('Please fill in all the fields!');
    return;
  }

  const task = {
    title: taskName.value.trim(),
    description: taskDescription.value.trim(),
  };

  const tasks = addTask(task);
  renderTasks(tasks);
  refs.form.reset();
}

function handleDelete(event) {
  if (!event.target.classList.contains('task-list-item-btn')) return;

  const index = event.target.closest('.task-list-item').dataset.index;
  const tasks = deleteTask(index);
  renderTasks(tasks);
}
