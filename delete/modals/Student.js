const mongoose = require('mongoose');

// Defining Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: { type: mongoose.Decimal128, required: true, validate: v => v >= 5500.50 },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [{ value: { type: String }, publish: { type: Date, default: Date.now } }],
  join: { type: Date, default: Date.now }
});

// Compiling Schema into Model
const studentModel = mongoose.model('student', studentSchema);

// delete documents
const deleteDocById = async(id)=>{
    try{
const result = await studentModel.findByIdAndDelete(id);
console.log(result);
console.log('Successfully deleted')
    }catch(err){
console.log(err);
    }
}


// delete one documents
const deleteOneDoc= async(id)=>{
    try{
const result = await studentModel.deleteOne({_id:id});
console.log(result);
console.log('Successfully deleted')
    }catch(err){
console.log(err);
    }
}


// Exporting both functions as an object
module.exports = { deleteDocById , deleteOneDoc};
