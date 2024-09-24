const mongoose = require('mongoose'); // calling mongoose library 
const router = require('../routes/student');
const Schema = mongoose.Schema;  // calling Schema from mongoose library . A schema is a blueprint for defining the structure of the documents that you store in a MongoDB collection.
const StudentSchema = new Schema({  // creating a new schema
    rollNo: {type: String , required: true},
    firstName: {type: String , required: true},
    lastName: {type: String , required: true},
    fatherName: {type: String , required: true},
    adharCardNo: {type: String , required: true},
    mobileNo: {type: String , required: true}
})

module.exports = mongoose.model('Student', StudentSchema); // exporting the schema