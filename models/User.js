let mongoose = require('mongoose');
let Schema = mongoose.Schema;

//book schema definition
let UserSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    picture: {
      type: String
    },
    day: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    year: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date
    }
});

// Sets the createdAt parameter equal to the current time
UserSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

//Exports the ModelSchema for use elsewhere.
module.exports = mongoose.model('User', UserSchema);
