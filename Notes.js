export default class Notes {
    constructor(header = '', details = '') {
      this.notes = [];
      this.notes.push([header,details]);
    }
  
    get notes(){
        return this.notes;
    }
    returnNote(index = -1) {
      return this.notes[index];
    }
    addNote(newNote = []) {
        this.notes.push(newNote);
    }
    removeNote(index = -1){
        this.notes.splice(index,1);
    }
    changeHeader(index = -1, newHeader = ''){
        this.notes[index][0] = newHeader;
    }
    changeDetails(index = -1, newDeets = ''){
        this.notes[index][1] = newDeets;
    }

    // get details() {
    //   return this.details;
    // }
    // set details(deets = '') {
    //   this._details = deets;
    // }


  };