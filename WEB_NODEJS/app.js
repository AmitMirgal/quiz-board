//load in configuration information
const express=require('express');
const path=require('path');
const cors=require('cors');
require('dotenv').config();

let app=express();
let app_route='/quiz';

app.use(cors({
	origin:'http://localhost:3000',
	optionsSuccessStatus:200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

//http://localhost:3001/quiz/test
app.use(`${app_route}/test`,(req,res,next)=>{
    res.send('TESTING NODE SERVER COMPLETE');
});
 
//ADD YOUR CODE HERE

app.listen(process.env.PORT,()=>{
	console.log(`Interview Quiz App started on ${process.env.PORT}`);
});