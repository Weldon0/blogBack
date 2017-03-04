const express = require('express');
const router = express.Router();
const fs = require('fs')
router.get('/user/blog/:name/:title', function(req, res) {
	var name = req.params.name;
	var title = req.params.title;
	var fileName = `blog/${name}/${title}.txt`;

	function send(code, message) {
		res.status(200).json({
			code: code,
			message: message
		});
	}
	fs.readFile(fileName, (err, data) => {
		var data = JSON.parse(data);
		if (err) {
			send('error', '系统错误')
		} else {
			res.render('readmore', {
				data: data
			})
		}
	})
})
module.exports = router;