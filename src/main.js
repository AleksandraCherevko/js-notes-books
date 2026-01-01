/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { refs } from './js/refs';
import addTask from './js/tasks';
import renderTasks from './js/render-tasks';

refs.form.addEventListener('submit', handleSubmit);

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
