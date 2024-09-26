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

// Update Document
const updateDocById = async(id)=>{
    try{
// const result = await studentModel.findByIdAndUpdate(id,{name:'Sudip'},{returnDocument:'after'});
console.log(result);  
}catch(error){
        console.log(error);
    }
}

// upadate one document
const upadateOneDoc = async(id)=>{
    try{
const result = await studentModel.updateOne({_id:id},{age : 30})
//const result = await studentModel.updateOne({_id:id},{age : 30},{upsert : true})
console.log(result);
    }catch(error){
console.log(error);
    }
}
const upadateOneDocByAge = async(a)=>{
    try{
const result = await studentModel.updateOne({age : a},{name : 'mouse'})
console.log(result);
    }catch(error){
console.log(error);
    }
}
const upadateManyDoc = async(a)=>{
    try{
const result = await studentModel.updateMany({age : a},{name : 'dollow'},{upsert : true})
console.log(result);
    }catch(error){
console.log(error);
    }
}

// Exporting both functions as an object
module.exports = {updateDocById , upadateOneDoc , upadateOneDocByAge , upadateManyDoc};
