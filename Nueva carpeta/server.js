var express = require('express')
var app= express()
var path = require('path')


app.use(express.static(path.join(__dirname,"public")))



app.get('/',(req,res)=>{
	res 
		.status(200)
		.sendFile(path.join(__dirname,"public","index.html"))
 })
 
app.listen(3000,(req,res)=>{
	console.log('the magic on port 3000')
})

