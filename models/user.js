const mongoose = require('mongoose');
const applicationSchema = mongoose.Schema({
  company: String,
  title: String,
  date: String,
  notes: String,
  postingLink: String,
  status: {
    enum: [ 'interested' , 'applied' , 'interviewwing' , 'rejected' , 'accepted' ] 
  }
},{timestamps: true})
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  application: [applicationSchema] //embeded
});

const User = mongoose.model('User', userSchema);

module.exports = User;
