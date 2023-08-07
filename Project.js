export default class Project {
    constructor(title) {
      this.title = title;
      this.todos = [];
    }
  
    get title() {
      return this.title;
  
    }
    addToDo(toDo = {}) {
      this.todos.push(toDo);
    }
    removeToDo(index = -1) {
      this.todos.splice(index, 1);
    }
    get todos() {
      return this.todos;
    }
    // searchForToDo(name) {
      
    // }
  };