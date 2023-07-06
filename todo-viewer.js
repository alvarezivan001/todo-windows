// this is for todo functions to load todos onto body
//to be exported

//for when clicking a project
const loadToDoIntoBody = (toDoItem) => {
  const listItem = document.createElement('li');
  listItem.setAttribute('class', toDoItem.project);
  listItem.setAttribute('id', toDoItem.title);

  const listItemPriority = document.createElement('div');
  let priorityString = 'priority' + ' ' + toDoItem.priority;
  listItemPriority.setAttribute('class', priorityString);

  const listItemTitle = document.createElement('div');
  listItemTitle.textContent = toDoItem.title;
  listItemTitle.setAttribute('class', 'todo_Title');
  const listItemDueDate = document.createElement('div');
  listItemDueDate.textContent = toDoItem.dueDate;
  listItemDueDate.setAttribute('class', 'dueDate');
  const listItemDetails = document.createElement('div');
  listItemDetails.textContent = toDoItem.details;
  listItemDetails.setAttribute('class', 'details');

  const listItemEdit = document.createElement('button');
  listItemEdit.textContent = 'edit';
  listItemEdit.setAttribute('class', 'edit');
  listItem.appendChild(listItemPriority);

  listItem.appendChild(listItemTitle);
  listItem.appendChild(listItemDueDate);
  listItem.appendChild(listItemDetails);

  listItem.appendChild(listItemEdit);

  const addTaskNode = document.getElementById('new-item');
  const itemsList = document.getElementById('items-list');
  itemsList.insertBefore(listItem, addTaskNode);
};


//after you add a new todo to a project
// const loadNewToDoIntoBOdy;

export { loadToDoIntoBody };