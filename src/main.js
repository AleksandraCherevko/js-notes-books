import { refs } from './js/refs';
import { addTask } from './js/tasks';
import renderTasks from './js/render-tasks';

refs.form.addEventListener('submit', handleSubmit);
refs.list.addEventListener('click', handleDelete);

export default function handleSubmit(event) {
  event.preventDefault();

  const inputValue = event.target;

  const taskName = inputValue.elements.taskName.value.trim();
  const taskDescription = inputValue.elements.taskDescription.value.trim();

  if (taskName === '' || taskDescription === '') {
    alert('Please fill in all the fields!');
    return;
  }

  const task = {
    title: taskName,
    description: taskDescription,
  };

  const tasksArray = addTask(task);
  renderTasks(tasksArray);

  refs.form.reset();
}

function handleDelete(event) {
  if (!event.target.classList.contains('task-list-item-btn')) {
    return;
  }

  const taskItem = event.target.closest('.task-list-item');
  const index = taskItem.dataset.index;

  const updatedTasks = deleteTask(index);
  renderTasks(updatedTasks);
}
