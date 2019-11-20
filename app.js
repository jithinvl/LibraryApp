
const express=require('express');
const chalk=require('chalk');
const path=require('path');
//middleware bodyParse requiring
const bodyParser=require('body-parser');
 //creating express object
var app=new express();

var nav=[{link:'/books',title:'Books'},{link:'/authors',title:'Authotrs'},{link:'books/addform',title:'Add New Book'}];
//Router creating
var authorRouter=require('./src/routes/authorRouter')(nav);
var booksRouter=require('./src/routes/booksRouter')(nav);
//use the path for accessing files from public folder
app.use(express.static(path.join(__dirname,"/public")));
app.set('views','./src/views');
app.set('view engin','ejs');

app.use(bodyParser.urlencoded({ extended: true }));

//use of Router
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
// parse application/x-www-form-urlencoded

//define navigation bar

//

app.get('/',function(req,res)
{
    res.render(
        'index.ejs',
    {
        nav,
        title:"Library"
    });
    // res.send('');
    //res.sendFile(path.join(__dirname,"src/views/index.html"));
 
});


// app.get('/books',function(req,res)
// {
//     res.render('books.ejs',
//     {
//         nav,
//         title:"Books",
//         books
//     });
    
// });
//define a request parameter id 
// app.get('/books/:id', function(req,res)

// {
//     var i=req.params.id;
//     //var i =req.param["id"];
//     res.render('book.ejs',
//     {
//         nav,
//         title:"Book",
//         book:books[i]
//     });
// });

//page author rendering

app.listen(8080,function()
{
    console.log('listening port '+chalk.red('8080'));
});
