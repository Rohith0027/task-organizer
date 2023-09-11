const mongoose = require('mongoose');
 
const StudentSchema = new mongoose.Schema({
    TaskId: Number,
    Name: String,
});
 
module.exports = mongoose.model(
    'student', StudentSchema, 'Students');