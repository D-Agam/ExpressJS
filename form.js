const express=require('express');
const app=express();
// tell our app to use ejs
app.set('view engine','ejs');
app.use(express.urlencoded({ extended:true}));
// using var we can use variables before they are declared they will be intialised with undefined
var tasks=[];
app.get('/',(req,res)=>
{
    res.render('server',{items:tasks});
});
//mounting our views folder on /xyz
app.use('/xyz',express.static(__dirname+"/views"));
app.post('/',(req,res)=>{
    tasks.push(req.body.name1);
    res.redirect('/');
});
app.listen(3012,()=>{
    console.log("Welcome");
});

// res.send(`
//     <html>
//         <body>
//             <form action="/" method="POST">
//                 <input name="newtask" />
//                 <button type="submit">Add</button>
//             </form>
//             <ul>${x}</ul>
//         </body>
//     </html>
// `);
// render uses view engine for index.ejs file render sees this .ejs files in the views folder
// kindofDay is variable from server.ejs file
// res.render('server', {kindofDay: 'weekday'});