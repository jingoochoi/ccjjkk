const http=require('http')
const express=require('express')
const path=require('path')
const app=express()
const multer=require('multer')
// const upload=multer({dest:'build/uploaded/'})
const storage=multer.diskStorage({destination:function (req,file,setPath) {
    setPath(null,'build/uploaded/')
},filename:function (req,file,setName) {
    setName(null,file.originalname)
}})
const upload=multer({storage:storage})
app.post('/upload',upload.single('file'),(req,res)=>{})
app.use(express.urlencoded({extended:true})); 
// url : Uniform Resource 
app.use(express.json());
app.listen(3030,function () {
    // 
})
app.use(express.static(path.join(__dirname,'/build')))//pack.json<-home:'localhost:3030'
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname),'/build/index.html')
})
