const express = require('express');
const router = express.Router();
const fs = require('fs');
router.get('/user/read/:data', function(req, res) {
	var name = req.params.data;
	var fileArray = []

	function send(code, message) {
		res.status(200).json({
			code: code,
			message: message
		});
	}
	fs.readFile(`admin/${name}.txt`, (err, data) => {

		if (err) {
			send('error', '系统错误')
		} else {

			var data = JSON.parse(data);
			var fileName = `blog/${name}`;
			if (!fs.existsSync(fileName)) 
			{
				fs.mkdirSync(fileName);
			}
			fs.readdir(fileName, (err, files) => {
				function recFile(index) {

					if (index < files.length) {
						fs.readFile(`${fileName}/${files[index]}`, (err, datablog) => {
							var datablog = JSON.parse(datablog);
							fileArray.push(datablog);
							recFile(++index);
						})
					} else {

						var fileData = fileArray.reverse();
						res.render('userRead', {
							data: fileData,
							num: 1,
							name: data.name,
							email: data.email,
							password: data.password,
							phone: data.phone,
							like: data.like,
							height: data.height,
							weight: data.weight,
							work: data.work,
							signature: data.signature,
							qq: data.qq
						})
					}
				}
				recFile(0)
			})

		}
	})

})
module.exports = router;