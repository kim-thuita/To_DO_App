const express = require("express")
const bodyParser = require("body-parser")
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
let additems =['Coding','Reading']


app.get("/",function(req,res) {

let today = new Date();
let currentday = today.getDay()


 let options = {
    day:'numeric',
    weekday:'long',
    month:'long',
 }



 let day = today.toLocaleDateString("en-US",options)


res.render("list",{KindofDay:day,NewItem:additems})



})

app.post("/",function(req,res){

 let additem = req.body.addedtext;

 additems.push(additem)

 res.redirect("/");



});





app.listen(4500,function() {
    console.log("ServerPort 4500 is up and Running");
})