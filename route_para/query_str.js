const express = require('express'); // importing module express
const app = express();// creating express of application
const PORT = process.env.PORT || 3000


// route parameters with regex
app.get('/', (req, res) => { 
  res.send('<h1>Hello World: 😄</h1>')
})

app.get('/product', (req, res) => {
    console.log(req.query); // Logs all query parameters
    const {category,id} = req.query
    res.send(`Response OK ${category} and ${id}`); // Sends a response including the 'category' query parameter
  });
  

app.all('*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>');
  });


app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`);
})