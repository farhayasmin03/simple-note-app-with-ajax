var express = require('express');
var router = express.Router();
var Note = require('../models/note');

router.get("/",function(req,res){    
    Note.findOne({}, function(err, note){
        res.render("index", {
            note: note
        }); 
    });
})

router.post("/save",function(req,res){
    let text = req.body.text;

    if (!text) {
        return res.send("Text is empty");
    }

    Note.findOne({}, function(err, note){
        if(note){
            note.text = text;
            return note.save((err, savedInstance) => {
                res.json(savedInstance);
            });
        }
        let note1 = new Note({
            text: text,
        });
        note1.save((err, savedInstance) => {
            res.json(savedInstance);
        });
    });
});

module.exports = router;