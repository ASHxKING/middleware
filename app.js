import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import Customlogger from "./middelware/logger.js";
import morgan from "morgan"

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:false}))

app.use(Customlogger)
app.use(morgan('combined'))

app.get("/", (req, res) => {
  // if((req.body.street = undefined) || (req.body.pet = undefined)){
   
  // }else{
    res.sendFile(__dirname + "/public/index.html");
  // }
  
});

app.post("/submit",(req,res)=>{
  console.log(req.body.street)
  console.log(req.body.pet)
  res.send(`<h1>Your Brand Name is ${req.body.street+req.body.pet}</h1>`)
  // res.redirect("/")
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
