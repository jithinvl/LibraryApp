const express = require('express');


const booksRouter = express.Router();



var books =
    [
        {
            title: "kayar",
            genre: "novel",
            author: "Thakazhi Shivashankara Pilla",
            image: "/img/takazhi.jpg"
        },
        {
            title: "romeo and juliet",
            genre: "drama",
            author: "William Shakespeare",
            image: "/img/shakespear.jpg"

        },
        {
            title: "data structure",
            genre: "information technology",
            author: "nathen",
            image: "/img/nathen.jpg"
        },
        {
            title: "wings of fire",
            genre: "autobiography",
            author: "apj abdul kalam",
            image: "/img/photo.jpg"
        },
    ]

function router(nav) {
    booksRouter.route('/')
        .get((req, res) => {
            res.render('books.ejs',
                {
                    nav,
                    title: "Books",
                    books
                });
        });

    booksRouter.route('/addform')
        .get((req, res) => {
            res.render('addform.ejs',
                {
                    nav,
                    title: "Add New Books",
                    books
                });
        })
    booksRouter.route('/save')
        .post((req, res) => {
            console.log(req.body);
            var book
            {
                title.req.body.title

            }


        });

    booksRouter.route('/:id')
        .get((req, res) => {
            var i = req.params.id;
            //var i =req.param["id"];
            res.render('book.ejs',
                {
                    nav,
                    title: "Book",
                    book: books[i]
                });

        });
    return booksRouter;

}




module.exports = router;