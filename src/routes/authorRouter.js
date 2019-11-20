const express=require('express');

const authorRouter=express.Router();


var authors=
[
    {
        name:"Thakazhi Shivashankara Pilla",
        age:"80",
        place:"Thakazhi",
        image:"/img/takazhi.jpg"
    },
    {
        name:"williem shakespear",
        age:"55",
        place:"englend",
        image:"/img/shakespear.jpg"

    },
    {
        name:"nathan",
        age:"40",
        place:"mumbai",
        image:"/img/nathen.jpg"
    },
    {
        name:"apj abdulkalam",
        age:"70",
        place:"Rameshwaram",
        image:"/img/photo.jpg"
    },
]

function router(nav)
{   
    authorRouter.route('/')
    .get((req,res)=>
{
    res.render('authors.ejs',
    {
        nav,
        authors,
        title:"Authors"
    
    });

});

return authorRouter;
}

module.exports=router;