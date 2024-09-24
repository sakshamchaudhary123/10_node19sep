const Student = require('../models/Student'); // Import the Student model

async function addStudent(req, res){
    try{
        console.log(req.body);
        let student = new Student(req.body);
        await student.save();
        res.render('studentadd');
    } catch(err){
        console.log(err);
    }
}

async function getStudents(req, res){
    try{
        let students = await Student.find();
        console.log(students);
        res.render('studentdetail', {students: students});
    }catch(err){
        console.log(err);
    }
}

async function getStudentForEdit(req, res) {
    try{
        let id = req.params.id;
        let student = await Student.findOne({_id: id});
        console.log(student);
        res.send(student);
    } catch(err){
        console.log(err);
    }
}

module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit
}