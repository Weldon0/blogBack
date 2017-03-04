const express = require('express');
const router = express.Router();
router.get('/user/photo',function (req,res) 
{
	res.render('photo');
})
module.exports = router;