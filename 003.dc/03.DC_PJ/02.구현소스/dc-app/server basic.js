const http=require('http')
const express=require('express')
const path=require('path')
const app=express()
app.listen(3030,function () {
    // 
})
app.use(express.static(path.join(__dirname,'/build')))//pack.json<-home:'localhost:3030'
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname),'/build/index.html')
})
