const express = require('express'),
 Words =require('../models/Words')
router = express.Router();

router.get('/words', (req, res) => {
    Words.find({}, function(err, result) {
        if (err)
            res.send(err.message);
        else
            res.send(result);
    });
});

router.post('/Word' , async (req, res) =>{ 
    const word = new Words({word:req.body.word})
    word.save()
    res.end()
})

module.exports = router;