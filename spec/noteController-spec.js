function NoteManagerMock() {
  var newNote = new Note("hello");
  this._noteList = [newNote];
}

NoteManagerMock.prototype.noteList = function(){
  return this._noteList;
};

it('displays the list', function(){
  var noteController = new NoteController(NoteManagerMock);
  return expect(noteController.displayList()).toEqual('<ul><li>hello...</li></ul>');
});
