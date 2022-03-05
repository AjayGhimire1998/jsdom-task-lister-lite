document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const task = document.querySelector('ul');


  form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(taskDescription.value);

    const taskListItems = document.createElement('li');
    task.appendChild(taskListItems);
    taskListItems.innerHTML = `<span>${taskDescription.value}</span> <button class = 'delete'>x</button> <button class = 'high'>*</button>`
  })

  task.addEventListener('click', (event) => {
    const trigger = event.target;
    if (trigger.className === 'delete') {
      trigger.parentNode.remove();
    } 
    else if (trigger.className === 'high'){
      const parent = trigger.parentNode;
     parent.querySelector('span').style.backgroundColor = 'yellow';
      
      } else if (trigger.dataset.clickcount == 2 ){
        trigger.removeEventListener('click');
        document.addEventListener('click', function() {
          parent.style.backgroundColor = 'white';

        })
      }

  });
})
