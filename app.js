const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
app.use(express.static(path.join(__dirname, 'public')))
//监听端口
app.listen(8080,()=>{
  console.log('HTTP Server is running on: http://localhost:%s', 8080)
})
app.get('*',(req,res)=>{
  let urlPath = req.path
  if(urlPath == '/'||urlPath=='/index.html'||urlPath=='/index'||urlPath=='') {
    console.log('返回index.html')
    res.end(fs.readFileSync(`./index.html`))

  } 
})