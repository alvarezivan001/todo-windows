import { loadToDoIntoBody } from "./todo-viewer.js";
import { createToDo, changeDueDate, changePriority } from "./todo-model.js";
import { newProject, addToProject, removeFromProject } from "./project-model.js";
import { loadProjectIntoDOM } from "./project-viewer.js";

const notAvailable = 'n/a';

const defaultProject = newProject('default');
const wakeUpToDo = createToDo('wake up', 'wake up to have a productive day!', 'default', notAvailable, 'high');
const sleepToDo = createToDo('sleep', 'early to bed, early to rise', 'default', notAvailable, 'medium');
const dishesToDo = createToDo('do dishes', 'pile of dishes need to be cleaned', 'default', notAvailable, 'low');

addToProject(defaultProject, wakeUpToDo);
addToProject(defaultProject, sleepToDo);
addToProject(defaultProject, dishesToDo);
loadProjectIntoDOM(defaultProject);
//initilization

var index = defaultProject.returnArray().length;
var array = defaultProject.returnArray();
for (var i = 0; i < index; i++) {
  loadToDoIntoBody(array[i]);
}
//displays todos from project array

const newToDoButton = document.querySelector('#new-item-button');

newToDoButton.addEventListener('click', () => {
  //ask for input from a dropdown: name, project, priortiy
  // desc. and due date optional?

});

//get nodelist of edit buttons
//would have to do this everytime a project is loaded or notes are loaded
const editNodelist = document.querySelectorAll('.edit');

editNodelist.forEach(node => node)