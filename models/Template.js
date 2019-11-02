let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//book schema definition
let TorneiosSchema = new Schema(
  {
    test: {
      type: String,
      required: true
    },
    test2: {
      type: String
    }
});

// Sets the createdAt parameter equal to the current time
/*
TorneiosSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});
*/

//Exports the ModelSchema for use elsewhere.
module.exports = mongoose.model('Torneios', TorneiosSchema);
