const express=require("express");
const app=express();
app.use(express.urlencoded({ extended:true}));

// for entertaining all http requests get is used and  '/' is used as root URL or home directory'
// for eg '/'(root) then '/login'(next directory) '/Logout' next so on 
// when get request is made to   path('/') (req,res) is called
app.get('/',(req,res) =>
{
    
    // console.log(req.query);
    // console.log(req.url);
    res.send("<h1>Hello</h1>");
});
app.get('/greet',(req,res)=>{
    let person="Agam";
    if(req.query.name)
        person=req.query.name;
    res.send("Good afternoon" +" "+ person);
})
// We send data as query parameters
// in case of post we use body urlencoded
app.get('/form1',(req,res)=>{
        res.sendFile(__dirname+'/server.html');  
});


app.post('/greet',(req,res)=>{
    let person="Agam";
    if(req.body.person)
        person=req.body.person;
    res.send("Good afternoon" +" "+ person);
})
// if we write /:greet it makes the greet as a variable
app.get('/:greet',(req,res)=>{
    res.send(req.params.greet + ' Not available!');
})
//making connection with server with listen
app.listen(3000,()=>{
    console.log("Server Started");
})
// we can use either localhost:3000 or 127.0.0.1:3000 or ipv4address:300 to start server