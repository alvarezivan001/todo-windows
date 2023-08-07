export default class ToDo {
    constructor(name = '', details = '', dueDate = '', priority = '') {
      this.name = name;
      this.details = details;
      this.dueDate = dueDate;
      this.priority = priority;
    }
    get name() {
      return this.name;
    }
    get details() {
      return this.details;
    }
    get dueDate() {
      return this.dueDate;
    }
    get priority() {
      return this.priority;
    }
    set dueDate(value = '') {
      this.dueDate = value;
    }
    set priority(value = '') {
      this.priority = value;
    }
    set details(value = '') {
      this.details = value;
    }
  };