const express = require('express');
const routers = require('./routers/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const multer = require('multer');
const upload = multer({ dest : '/uploads/'});
const path = require("path");
const PORT = process.env.PORT || 8000;
require("dotenv").config();



app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")))

//initializing routes
app.use('/api',routers);


app.use(express.static('uploads'));
//
app.use(express.static('public'));

//error handling
app.use(function(err,req,res,next){
    // console.log(err);
    res.status(422).send({error: err.message});
})


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userData');
mongoose.Promise = global.Promise;
//sending an object to localhost

// app.get('/',function(req,res){
//     res.send({name : 'chohan'})
//     console.log("running at port 400")
// })
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(PORT,function(){
    console.log("now listening for requests");
})

