// 上传照片,主要的设置在server.js文件中
const express = require('express');
const router = express.Router();

router.post('/user/addphoto',upLoads.single('photo'),(req,res)=>
{

    res.status(200).json({code:'success',message:'上传成功'})
})

module.exports = router;