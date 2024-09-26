
const express = require('express'); // importing module express
const app = express();// creating express of application
const PORT = process.env.PORT || 3000
// route parameters
app.get('/', (req, res) => { 
  res.send('<h1>Hello World: 😄</h1>')
})

// app.get('/student/delete/:id', (req, res) => { 
// console.log(req.params)  
//     res.send(`<h2>Student Delete ${req.params.id}</h2>`)
// })



// app.get('/product/:category/:id', (req, res) => { 
// console.log(req.params)//key 

// // method 1
//     res.send(`<h2>Product Category: ${req.params.category} and Product id:${req.params.id}</h2>`)

//     // using destructure , method 2
//     // const { category,id} = req.params
//     // res.send(`<h2>Product Category: ${category} and Product id:${id}</h2>`)
// })




// app.get('/product/order/:year/and/:month', (req, res) => { 
// console.log(req.params)//key 
// const {year,month} = req.params
// res.send(`Year: ${year} and Month: ${month}`);
// })



// app.get('/train/:form-:to',(req, res) => {
//     console.log(req.params)
//     const {form , to}  = req.params
//     res.send(`Travelling from : ${form} to : ${to}`);
// })




// app.get('/location/:state.:city', (req, res) => {
//     console.log(req.params)
//     const {state , city}  = req.params
//     res.send(`State: ${state} ,City : ${city}`);
// })


app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`);
})