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

// Function to create a new student document 
// const createStudent = async () => {
//   try {
//     const student = new studentModel({
//     name: 'Niraj',
//     age: 35,
//     fees: 6100.50,
//     hobbies: ['gym', 'music'],
//     isActive: true,
//     comments: [{ value: 'Sucessful businessman!' }]
//     });

//     const result = await student.save();
//     console.log('Student created:', result);
//   } catch (error) {
//     console.log('Error creating student:', error);
//   }
// };

// Export the function
// module.exports = createStudent;

// Function to retrieve all documents
const allDocuments = async () => {
    try {
        const result = await studentModel.find();
        console.log('All Students:', result);
  
        console.log('================================')
        // If you want to log the name of each student
        result.forEach((item) => {
            console.log('Student Name:', item.name);
            console.log('Student Age:', item.age);
            console.log(`Student fees:`, item.fees.toString());
            console.log('Student comments', item.comments[0].value);
            console.log('Student published:', item.comments[0].publish)
        });
    } catch (error) {
        console.log('Error retrieving documents:', error);
    }
}


console.log('================================')

// Function to retrieve all documents with specified fields
const allDocumentsSpecificField = async () => {
    try {
       // const result = await studentModel.find().select('name age fees'); // include
      //  const result = await studentModel.find().select({ name:1 , age: 1 , fees: 1}); // include

      // const result = await studentModel.find().select('-name -age -fees'); // exclude
       // const result = await studentModel.find().select({ name:0 , age: 0 , fees: 0}); // include
      
       // console.log('All Students:', result);
        console.log(result)
    } catch (error) {
        console.log('Error retrieving documents:', error);
    }
}

// Retrieve Single Document
const getSingleDoc = async ()=>{
    try {
    const result = await studentModel.findById("66b4ee4346fc1da3cf0f8706")
  //  console.log(result)
  console.log(result.name , result.age , result.fees.toString() , result._id.getTimestamp())
}catch (error) {
    console.log('Error retrieving documents:', error);
}
}


// Retrieve Single Document with Specific field
const getSingleDocSpecificField = async ()=>{
    try {
    const result = await studentModel.findById("66b4ee4346fc1da3cf0f8706" , "name age")
    console.log(result)
}catch (error) {
    console.log('Error retrieving documents:', error);
}
}

// retrieve document with field
const getDocByField = async ()=>{
    try{
    const result = await studentModel.find({name : 'Nitesh'})
    // const result = await studentModel.find({isActive : true})
    console.log(result)
console.log(result[0].name , result[0].age)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}

// retrieve document with field with specific field
const getDocByFieldSpecific  = async ()=>{
    try{
    const result = await studentModel.find({name : 'Nitesh'}).select('name age')
    // const result = await studentModel.find({isActive : true})
    console.log(result)
console.log(result[0].name , result[0].age)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}

// retrieve limit documents
const getLimitedDoc = async ()=>{
    try{
    const result = await studentModel.find().limit(1)
    console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}

// retrieve skip documents
const getSkipDoc = async ()=>{
    try{
    const result = await studentModel.find().skip(1)
    console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}

// count document
const getCount = async ()=>{
    try{
    const result = await studentModel.find().countDocuments()
    console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}


// sort document
const getSortDoc = async ()=>{
    try{
    //const result = await studentModel.find().sort({name:1}) // ascending
    const result = await studentModel.find().sort({name:-1}) // descending

    console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}


// Mix document
const mixDoc = async ()=>{
    try{
const result = await studentModel.find({},{name : 1 , age :1},{limit :1})
console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}

// compare query operations

const compareOperatorDoc = async ()=>{
    try{
//const result = await studentModel.find({age:{$gt : 24}}) // greater  
//const result = await studentModel.find({age:{$gte : 25}}) // greater than  equal
//const result = await studentModel.find({age:{$lt : 26}}) // less 
//const result = await studentModel.find({age:{$lte : 25}}) // less than equal 
//const result = await studentModel.find({age:{$ne : 25}}) // 
//const result = await studentModel.find({age:{$in : [25,35]}}) // in array
const result = await studentModel.find({age:{$nin : [25]}}) // in not array
console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}


// Logical Query Operators
const logDoc = async ()=>{
    try{
//const result = await studentModel.find({$and:[{age:27},{fees:6500.4}]})
//const result = await studentModel.find({$or:[{age:25},{fees:6500.4}]})
//const result = await studentModel.find({$and:[{age : {$gt: 25}},{fees:6500.4}]})
//const result = await studentModel.find({age : {$not : {$gt : 25}}})
const result = await studentModel.find({$nor: [{age: 27},{fees:6500.4}]})

console.log(result)
}
catch (error) {
    console.log('Error retrieving documents:', error);
}
}


// Exporting both functions as an object
module.exports = { allDocuments, allDocumentsSpecificField , getSingleDoc ,
                    getSingleDocSpecificField ,getDocByField , getDocByFieldSpecific,
                    getLimitedDoc , getSkipDoc , getCount, getSortDoc , mixDoc ,
                    compareOperatorDoc ,logDoc};
