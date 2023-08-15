import { loadToDoIntoBody, displayNewToDoPrompt, hideNewToDoPrompt, clearToDoPromptFields } from "./todo-viewer.js";
import { createToDo, changeDueDate, changePriority } from "./todo-model.js";
import { newProject, addToProject, removeFromProject } from "./project-model.js";
import { loadProjectIntoDOM } from "./project-viewer.js";
// import { addProject, deleteProject, loadToDoOnClick } from "./project-controller.js";
// import { initializeToDo } from "./todo-controller.js";

const dueDateNA = 'due date n/a';
//variable for duedate
const projectsArray = new Array();
//array for all the projects

const directorAddProject = (name) => {
//adds a project to the project array 
//and loads it into the DOM
  projectsArray.push(newProject(name));
  loadProjectIntoDOM(projectsArray.find(item => item.title == name));
};
const getProjectIndex = (projTitle) => {
//gets the index given a title?
  return projectsArray.findIndex(item => item.title == projTitle);
}
const getProjectTitle = (projIndex) => {
  return projectsArray[projIndex].title;
  //returns the title, given an index
}


directorAddProject('default');
//creates the default project
const currentProjectIndex = getProjectIndex('default');
//gets the index of default

//basic todos
const wakeUpToDo = createToDo('wake up', 'wake up to have a productive day!', 'default', dueDateNA, 'high');
const sleepToDo = createToDo('sleep', 'early to bed, early to rise', 'default', dueDateNA, 'medium');
const dishesToDo = createToDo('do dishes', 'pile of dishes need to be cleaned', 'default', dueDateNA, 'low');

//adds basic todos to default
addToProject(projectsArray[currentProjectIndex], wakeUpToDo);
addToProject(projectsArray[currentProjectIndex], sleepToDo);
addToProject(projectsArray[currentProjectIndex], dishesToDo);


const loadAllProjectToDos = (projIndex) => {

  var index = projectsArray[projIndex].returnArray().length;
  var array = projectsArray[projIndex].returnArray();
  for (var i = 0; i < index; i++) {
      loadToDoIntoBody(array[i]);
  }
  //displays todos from project array given a project index
};
loadAllProjectToDos(currentProjectIndex);


//gets buttons
const newToDoButton = document.querySelector('#new-item-button');
const cancelToDoButton = document.querySelector('#todo-cancel');
const enterToDoButton = document.querySelector('#todo-enter');

newToDoButton.addEventListener('click', () => {
  displayNewToDoPrompt();
  // steps: bring up a div with inputs // part  of todo viewer
  //us info to create to do //todomodel
  //controller will facilatate between the two
});
cancelToDoButton.addEventListener('click', () => {
  hideNewToDoPrompt();
  clearToDoPromptFields();
});
enterToDoButton.addEventListener('click', () => {
  submitNewToDo();
  hideNewToDoPrompt();
  clearToDoPromptFields();
});

//if new task is submitted, adds it to the project and loads it to DOM
const submitNewToDo = () => {
  const newToDoTitle = document.getElementById('todo_name').value;
  const newToDoDetails = document.getElementById('todo_details').value;
  const newToDoPriority = document.getElementById('todo_priority').value;
  const newToDoDueDate = document.getElementById('todo_duedate').value;
  const newToDoProject = getProjectTitle(currentProjectIndex);

  const newToDo = createToDo(newToDoTitle, newToDoDetails, newToDoProject, newToDoDueDate, newToDoPriority);
  addToProject(projectsArray[currentProjectIndex], newToDo);
  loadToDoIntoBody(newToDo);
}

// //done with currentindex
// const removeCurrentProjectFlag = () => {}
// const addCurrentProjectFlag = () => {}

// //get nodelist of edit buttons
// //would have to do this everytime a project is loaded or notes are loaded
// const editNodelist = document.querySelectorAll('.edit');

// editNodelist.forEach(node => node);
