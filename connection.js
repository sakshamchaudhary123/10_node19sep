const mongoose = require("mongoose"); // Require the mongoose library
// Create a new async function called connection
// in line 6, we are trying to connect to the local mongodb server
async function connection() {
  try {
    let connect =await mongoose.connect('mongodb://localhost:27017/New-Database');
    console.log('connection successful...');
  } catch (err) {
    console.log(err);
  }
}
module.exports = connection; // Export the connection function