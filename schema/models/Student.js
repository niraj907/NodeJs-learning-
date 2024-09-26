const mongoose = require('mongoose');

console.log('Starting 7')


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

//method 1


const createStd = async () => {
    try {
        // creating new Document
        const studentDoc = new studentModel({
            name: 'Nitesh',
            age: 25,
            fees: 6100.50,
            hobbies: ['gym', 'music'],
            isActive: true,
            comments: [{ value: 'Sucessful businessman!' }]
        });

        // Saving Document
        const result = await studentDoc.save();
        console.log(result);
        console.log('Student saved successfully');

    } catch (error) {
        console.log(error);
        console.log('Data has not been saved')
    }
}


//method 2


// const createStd = async (nm,ag,fee,hob,isact,comt) => {
//     try {
//         // creating new Document
//         const studentDoc = new studentModel({
//             name: nm,
//             age: ag,
//             fees: fee,
//             hobbies:hob,
//             isActive: isact,
//             comments:comt
//         });

//         // Saving Document
//         const result = await studentDoc.save();
//         console.log(result);
//         console.log('Student saved successfully');

//     } catch (error) {
//         console.log(error);
//     }
// }



module.exports = createStd;


