const express = require('express');
const bodyParse = require('body-parser');
const app = express();
const PORT = 3068;
app.use(bodyParse.json())


app.get('/user', (req,res)=>{
    let query = req.query
    let path = req.path
    console.log(query)
    console.log(path)
    res.json({"info":{query,path}})
})

var dataSet = [];

app.post('/postData',(req,res)=>{
    dataSet.push(req.body.id); 
    dataSet.push(req.body.name); 
    res.send(dataSet)
})

app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
