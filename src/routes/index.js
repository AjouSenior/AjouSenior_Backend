import { Router } from 'express';
import Community from '../model/community.js';
import hope from '../model/hope.js';

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
    Community.find().then(function(obj){
        console.log(obj)
        res.json(200)
    })
})
router.post('/talentdonation/upload', function(req, res){
    const seniorcenter = req.body.seniorcenter;
    const writer = req.body.writer;
    const date = req.body.date;
    const content = req.body.content
    const needpeople = req.body.daneedpeoplete
    const talentdonation = new hope({
        seniorcenter : seniorcenter,
        writer : writer,
        date : date,
        content : content,
        needpeople : needpeople,
    });
    talentdonation.save().then(() => 
        console.log('Saved successfully'),
        res.json(200)
        );
});
export default router