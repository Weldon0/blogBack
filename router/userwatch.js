const express = require('express');
const router = express.Router();
const fs = require('fs')
router.get('/user/watchblog', function(req, res) {
    var fileArray = [];
    var fileName = `blog/${req.cookies.petname}`;
    fs.readdir(fileName, (err, files) => {
        function recFile(index) {

            if (index < files.length) {
                fs.readFile(`${fileName}/${files[index]}`, (err, data) => {
                    var data = JSON.parse(data);
                    fileArray.push(data)
                    recFile(++index)
                })
            } else {
                var fileData = fileArray.reverse();
                res.render('listblog', {
                    data: fileData,
                    num: 1
                })
            }
        }
        recFile(0)
    })

})
module.exports = router;