import { Router } from 'express';
import Community from '../model/community.js';

const router = Router();

router.post('/community/upload', function(req, res){
    const title = req.body.title;
    const content = req.body.content;
    const writer = req.body.writer;
    const comment = req.body.comment
    const date = req.body.date
    const community = new Community({
        title : title,
        content : content,
        writer : writer,
        comment : comment,
        date : date
    });
    community.save().then(() => 
        console.log('Saved successfully'),
        res.json(200)
        );
});
router.get('/community/readall',function(req,res){
    const readall = Community.find()
    if (readall){
        res.json(200)
        console.log(readall)
    }
    else{
        res.json(500)
    }
})
export default router