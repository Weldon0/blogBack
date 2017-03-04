const express = require('express');
const router = express.Router();
const fs = require('fs')
router.post('/user/register', function(req, res) {
    var fileName = `admin/${req.body.name}.txt`;
    var date = new Date();
    req.body.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + '  ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  
    fs.exists(fileName, function(exists) {
        if (exists) {
            res.status(200).json({
                code: 'error',
                message: '管理员已经存在'
            });
        } else {
            fs.appendFile(fileName, JSON.stringify(req.body), function(err) {
                if (err) {
                    res.status(200).json({
                        code: 'error',
                        message: '抱歉系统错误'
                    });
                } else {
                    res.status(200).json({
                        code: 'success',
                        message: '恭喜您，注册成功'
                    });
                }
            })
        }
    })

})
module.exports = router;