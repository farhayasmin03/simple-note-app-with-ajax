var mongoose = require('mongoose');
var NoteSchema = new mongoose.Schema({
    text: {
      type: String,     
      required: true,
      trim: true
    }
});
var Note = mongoose.model('Note', NoteSchema);
module.exports = Note;