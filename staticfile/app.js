const express = require('express'); // importing module express
const app = express();// creating express of application
const web = require('./routes/web');
const path = require('path');
const PORT = process.env.PORT || 3000;

// static files
// app.use(express.static('public'))
 app.use(express.static(path.join(process.cwd(),'public')));


// const options ={
//     dotfiles : 'ignore',
//     etag : false,
//     extensions : ['htm','html'],
//     index: false,
// maxAge : 'id',
// redirect : false,
// setHeader : function(res,path,stat){
//     res.set('x-timestamp',Date.now());
// }
// }
//  app.use(express.static(path.join(process.cwd(),'public'),options));


// individual files
// app.use('/css',express.static(path.join(process.cwd(),'public/css')));
// app.use('/images',express.static(path.join(process.cwd(),'public/images')));
// app.use('/js',express.static(path.join(process.cwd(),'public/js')));


console.log(path.join(process.cwd(),'public'))
// load routes
app.use('/',web)

app.listen(PORT, () => {
    console.log(`App listening running at http://localhost:${PORT}`)
})