export default class Project {
    constructor(title = '') {
      this._title = title;
      this._items = [];
    }
  
    get title() {
      return this._title;
  
    }
    addItem(item = {}) {
      this._items.push(item);
    }
    removeItem(index = -1) {
      this._items.splice(index, 1);
    }
    get items() {
      return this._items;
    }
    // searchForToDo(name) {
      
    // }
  }

  