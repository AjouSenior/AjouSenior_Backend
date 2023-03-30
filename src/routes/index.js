import { Router } from 'express';
import Community from '../model/community.js';
import Talentdonation from "../model/talentdonation.js"
import User from "../model/user.js"
const router = Router();

router.post('/user/signup',function(req,res){
    const profile_nickname = req.body.profile_nickname;
    const account_email = req.body.account_email;
    const gender = req.body.gender;
    const age_range = req.body.age_range
    const birthday = req.body.birthday
    const user = new User({
        profile_nickname : profile_nickname,
        account_email : account_email,
        gender : gender,
        age_range : age_range,
        birthday : birthday
    });
    user.save().then(() => 
        console.log('Saved successfully'),
        res.json(200)
        );
})

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
    const talentdonation = new Talentdonation({
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
router.get('/talentdonation/readall',function(req,res){
    Talentdonation.find().then(function(obj){
        console.log(obj)
        res.json(200)
    })
})
export default router