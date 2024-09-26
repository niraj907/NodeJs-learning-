const { name } = require('ejs')
const recipeModel = require('../modals/recipe')



    // craete document
     createDoc = async (req, res) => {
        try {
            const { title, image, rating } = req.body;
            // console.log('title: ' + title);
            // console.log('image: ' + image);
            // console.log('rating: ' + rating);
            // if (!title || !image || !rating) {
            //     throw new Error('All fields are required.');
    
            // }
            const doc = new recipeModel({
                title: title,
                image: image,
                rating: rating
            });
            

            // Save document
            const result = await doc.save();
            console.log(result);
            res.redirect('/category'); 
        } catch (error) {
            console.error(error);
            res.status(500).send('There was an error processing your request.');
        }
    }
    // retrieve All Document
     getAllDoc = async (req, res) => {
        try {
            const result = await recipeModel.find();
           // console.log(result);
            res.render("index", {data: result }); 
        } catch (error) {
            console.error(error);
        }
    }
    // edit 
     editDoc = async(req, res) => {
        try {
            const result = await recipeModel.findById(req.params.id);
            console.log(result);
            console.log(`Editing document with ID: ${req.params.id}`);
            res.render("edit",{data: result});       
        } catch (error) {
           console.log(`Error: ${error}`); 
           res.status(500).send('There was an error processing of editing .');
        }
    }

    // Update Document
     updateDocByID = async(req, res) => {
    try{
        const result = await recipeModel.findByIdAndUpdate(req.params.id,req.body);
        console.log(result);  
        res.redirect('/category');
    }catch(error){
        console.log(error);
    }
}

    
     deleteDocByID = async(req, res) => {
        try {
            const result = await recipeModel.findByIdAndDelete(req.params.id);
            console.log(result);  
            res.redirect('/category');
        } catch (error) {
            console.log(error);
        }
    }


module.exports = {createDoc,getAllDoc,editDoc,updateDocByID,deleteDocByID};
