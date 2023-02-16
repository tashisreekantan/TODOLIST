function renderTodoList(todos) {
  const contentDiv = document.getElementById('content');
  contentDiv.innerHTML = '';

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');
  const headerRow = document.createElement('tr');
  const idHeader = document.createElement('th');
  idHeader.textContent = 'ID';
  headerRow.appendChild(idHeader);
  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Title';
  headerRow.appendChild(titleHeader);
  const completedHeader = document.createElement('th');
  completedHeader.textContent = 'Completed';
  headerRow.appendChild(completedHeader);
  thead.appendChild(headerRow);

  todos.forEach(todo => {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    idCell.textContent = todo.id;
    row.appendChild(idCell);
    const titleCell = document.createElement('td');
    titleCell.textContent = todo.title;
    row.appendChild(titleCell);
    const completedCell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    completedCell.appendChild(checkbox);
    row.appendChild(completedCell);
    tbody.appendChild(row);
  });
  table.appendChild(thead);
  table.appendChild(tbody);
  contentDiv.appendChild(table);
}

function handleTodoLinkClick(event) {
  event.preventDefault();

  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => renderTodoList(todos))
    .catch(error => console.error(error));
}

const todoLink = document.getElementById('todo-link');
todoLink.addEventListener('click', handleTodoLinkClick);

function fetchTodoList() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => {
      const completedTodos = todos.filter(todo => todo.completed);
      const numCompletedTodos = completedTodos.length;
      if (numCompletedTodos >= 5) {
        return Promise.resolve(completedTodos);
      } else {
        return Promise.reject(new Error(`Tasks are not completed.`));
      }
    });
}

function markCompletedTodos() {
  fetchTodoList()
    .then(completedTodos => {
      alert(`5 Tasks have been Completed`);
    })
    .catch(error => {
      console.error(error);
    });
}

markCompletedTodos();
