(function(exports){
  function NoteController(noteManagerInstance) {
    this._noteManager = new noteManagerInstance();
  }

  NoteController.prototype = {
    displayList: function() {
      var noteList = this._noteManager.noteList();
      var noteListTitles = [];
      console.log(noteList);
      noteList.forEach(function(element){
        noteListTitles.push(element._title);
      });
    return noteListView.toHtml(noteListTitles);
    }
  };

  exports.NoteController = NoteController;
})(this);
