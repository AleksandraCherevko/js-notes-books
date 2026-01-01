import { refs } from './refs';
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

  const tasks = {
    title: taskName,
    description: taskDescription,
  };

  localStorage.setItem('tasks', JSON.stringify(tasks));

  const saveItem = localStorage.getItem('tasks', JSON.stringify(tasks));
  refs.form.reset();
}
