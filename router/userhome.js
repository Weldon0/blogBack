const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get('/user/home', function(req, res) {

    var fileArray = [];
    fs.readdir('admin', (err, files) => {
        function recFile(index) {
            if (index < files.length) {
                fs.readFile(`admin/${files[index]}`, (err, data) => 
                {
                    var data = JSON.parse(data);
                    fileArray.push(data)
                    recFile(++index)
                })
            } else {
                var fileData = fileArray.reverse();
                res.render('home', 
                {
                    data: fileData,
                    num: 1
                })
            }
        }
        recFile(0)
    })


})
module.exports = router;