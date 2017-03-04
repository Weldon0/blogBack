const express = require('express');
const router = express.Router();
const fs = require('fs');
router.post('/user/sign', function(req, res) {
    function send(code, message) {
        res.status(200).json({
            code: code,
            message: message
        });
    }
    var fileName = `admin/${req.body.name}.txt`;
    fs.exists(fileName, function(exists) {

        if (exists) {
            fs.readFile(fileName, function(errorCode, data) {
                if (errorCode) {
                    send('file error', '抱歉系统错误');
                } else {
                    var data = JSON.parse(data);
                    if (req.body.password == data.password) {
                        res.cookie('petname', req.body.name);
                        send('success', '登陆成功');
                    } else {
                        send('sign error', '密码错误');
                    }

                }
            })
        } else {
            send('error', '未注册');
        }

    })
})
module.exports = router;