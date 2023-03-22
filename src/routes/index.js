import { Router } from 'express';
import Book from '../model/book.js';

const router = Router();

router.post('/api/books', function(req, res){
    const title = req.body.title;
    const author = req.body.author;
    const book = new Book({
        title : title,
        author : author
    });
    book.save().then(() => 
        console.log('Saved successfully'),
        res.json(200)
        );

});

export default router