import { loadToDoIntoBody } from "./todo-viewer.js";
import { createToDo, changeDueDate, changePriority } from "./todo-model.js";
import { newProject, addToProject, removeFromProject } from "./project-model.js";
import { loadProjectIntoDOM } from "./project-viewer.js";
// import { addProject, deleteProject, loadToDoOnClick } from "./project-controller.js";
// import { initializeToDo } from "./todo-controller.js";

const dueDateNA = 'due date n/a';
const projectsArray = new Array();

const directorAddProject = (name) => {

  projectsArray.push(newProject(name));
  loadProjectIntoDOM(projectsArray.find(item => item.title == name));
};
const getProjectIndex = (projTitle) => {

  return projectsArray.findIndex(item => item.title == projTitle);
}


directorAddProject('default');
const defaultIndex = getProjectIndex('default');


const wakeUpToDo = createToDo('wake up', 'wake up to have a productive day!', 'default', dueDateNA, 'high');
const sleepToDo = createToDo('sleep', 'early to bed, early to rise', 'default', dueDateNA, 'medium');
const dishesToDo = createToDo('do dishes', 'pile of dishes need to be cleaned', 'default', dueDateNA, 'low');


addToProject(projectsArray[defaultIndex], wakeUpToDo);
addToProject(projectsArray[defaultIndex], sleepToDo);
addToProject(projectsArray[defaultIndex], dishesToDo);


const loadAllProjectToDos = (projIndex) => {

  var index = projectsArray[projIndex].returnArray().length;
  var array = projectsArray[projIndex].returnArray();
  for (var i = 0; i < index; i++) {
      loadToDoIntoBody(array[i]);
  }
  //displays todos from project array
};
loadAllProjectToDos(defaultIndex);


const newToDoButton = document.querySelector('#new-item-button');

newToDoButton.addEventListener('click', () => {
  //ask for input from a dropdown: name, project, priortiy
  // desc. and due date optional?

  // steps: bring up a div with inputs // part  of todo viewer
  //us info to create to do //todomodel
  //controller will facilatate between the two


});

//get nodelist of edit buttons
//would have to do this everytime a project is loaded or notes are loaded
const editNodelist = document.querySelectorAll('.edit');

editNodelist.forEach(node => node);
