const Student = require('../models/Student'); // Import the Student model

async function addStudent(req, res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.end("<h1>Data added successfully....</h1>");
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent
}