const express = require('express');
const recipeData = require('./data'); // This should import your initial recipe data array
const app = express();

app.get('/',(req,res)=>{
  res.send('<h1>Starting Recipe App</h1>')
})


// Middleware to parse JSON data
app.use(express.json());

// GET /api/recipe - Read all recipes
app.get("/api/recipe", (req, res) => {
  if (recipeData.length === 0) {
    console.log('No recipe data available');
    res.status(200).json({ success: true, message: "No recipe data available" });
  } else {
    console.log('data available');
    res.status(200).json({ success: true, data: recipeData });
  }
});

// GET /api/recipe/:id - Read a single recipe by ID
app.get("/api/recipe/:id", (req, res) => {
  const { id } = req.params;
  const recipe = recipeData.find((recipe) => recipe.id === id);
  if (!recipe) {
    console.log('No recipe')
     res
     .status(404)
     .json({ success: false, message: `No recipe with id ${id} found` });
  }
  console.log(`Recipe with id ${id} found`)
 return res.status(200).json({ success: true, data: recipe });
});

// POST /api/recipe - Create a new recipe
app.post("/api/recipe", (req, res) => {
  const { img, title, price, description } = req.body;
  console.log("Server received the payload", req.body);
  if (!img || !title || !price || !description) {
    return res.status(400).json({
      success: false,
      message: "Must provide image, title, price, and description for the recipe",
    });
  }
  const newRecipe = {
    id: recipeData.length + 1,
    img,
    title,
    price,
    description,
  };
  recipeData.push(newRecipe); // Adding new recipe to the data
  res.status(201).json({
    success: true,
    data: newRecipe,
  });
});


// PUT /api/recipe/:id - Update an existing recipe
app.put("/api/recipe/:id", (req, res) => {
  const { id } = req.params;
  const { img, title, price, description } = req.body;
  const recipeIndex = recipeData.findIndex((recipe) => recipe.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ success: false, message: `No recipe with id ${id} found` });
  }

  if (!img || !title || !price || !description) {
    return res.status(400).json({
      success: false,
      message: "Must provide image, title, price, and description for the recipe",
    });
  }

  // Update the recipe data
  recipeData[recipeIndex] = { id: parseInt(id), img, title, price, description };
  res.status(200).json({ success: true, data: recipeData[recipeIndex] });
});

// DELETE /api/recipe/:id - Delete a recipe
app.delete("/api/recipe/:id", (req, res) => {
  const { id } = req.params;
  const recipeIndex = recipeData.findIndex((recipe) => recipe.id === parseInt(id));

  if (recipeIndex === -1) {
    return res.status(404).json({ success: false, message: `No recipe with id ${id} found` });
  }

  // Remove the recipe from the array
  recipeData.splice(recipeIndex, 1);
  res.status(200).json({ success: true, message: `Recipe with id ${id} deleted` });
});
  
// All other routes
app.get('*', (req, res) => {
  res.status(404).send('<h1>Page Not Found</h1>');
});

// Starting the server
app.listen(5000, () => console.log("Server running at http://localhost:5000"));
