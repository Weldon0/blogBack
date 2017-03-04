const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const template = require('art-template')
const cookieParser = require('cookie-parser');
const multer = require('multer');
const storagec = multer.diskStorage(
    {
        //  destination用于设置文件的存储目录  uploads自动会创建
        destination:'public/uploads',
        // filename用于设置文件名
        filename:function(req,file,cb)
        {
            var petname = req.cookies.petname
            cb(null,`${petname}.jpg`)
        }
    })
   upLoads= multer({storage:storagec})



const app = express();
app.engine('html',template.__express);
app.set('view engine','html');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser())

app.use(require('./router/index'))
app.use(require('./router/userSign'));
app.use(require('./router/userhome'));
app.use(require('./router/addadmin'));
app.use(require('./router/userRegister'));
app.use(require('./router/editblog'));
app.use(require('./router/addblog'));
app.use(require('./router/userwatch'));
app.use(require('./router/deleteblog'));
app.use(require('./router/readmore'));
app.use(require('./router/useread'));
app.use(require('./router/userblog'));
app.use(require('./router/userSearch'));
app.use(require('./router/userphoto'));
app.use(require('./router/addphoto'));
// app.use(require('./router/deletfolder'));
app.use(require('./router/deleteuser'));





app.listen(3000,function () 
{
	console.log('server running on port 3000')
})