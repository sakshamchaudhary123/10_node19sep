const express = require('express');
const studentcontroller = require('../controllers/studentcontroller');
const router = express.Router();
router.use(express.urlencoded({extended: false}));

router.get('/', (req, res)=> {
    res.render('home');
});

router.post('/add/student', (req, res)=>{
    studentcontroller.addStudent(req, res);
})
module.exports = router; // Export the router