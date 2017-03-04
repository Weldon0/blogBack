const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get('/user/search/:name', function(req, res) {
    var name = req.params.name
    var fileData = [];
    console.log(fs.existsSync(`admin/${name}.txt`));
    fs.readFile(`admin/${name}.txt`, (err, data) => 
    {
        if (err) 
        {
            res.render('home', 
            {
                data: fileData,
                num: 1
            })
        } 
        else 
        {
            var data = JSON.parse(data);
            fileData.push(data)
            res.render('home', 
            {
                data: fileData,
                num: 1
            })
        }
    })
})
module.exports = router;