import { refs } from './refs';

export default function renderTasks(tasksArray) {
  refs.list.innerHTML = ''; // очистка старого списка
  const markup = tasksArray
    .map(
      task => `<li class="task-list-item">
        <button class="task-list-item-btn">Delete</button>
        <h3>${task.title}</h3>
        <p>${task.description}</p>
      </li>`
    )
    .join('');
  refs.list.insertAdjacentHTML('beforeend', markup);
}
