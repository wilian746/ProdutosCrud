var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    index: true,
    unique: true,
    required: [true, 'username is required']
  },
  password: {
    type: String,
    required: [true, 'password is required']
  }
}, {
  autoIndex: false,
  timestamps: true
})

module.exports = mongoose.model('User', UserSchema)