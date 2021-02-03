const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const db =require("./mongo");
const app = express();
app.use(express.json());
app.use(cors());


app.get("/geter", (req, res) => {
    
    db.find((err, data) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.send(data).status(201);
      }
    });
  });


app.post("/uploads", (req, res) => {
    const body = req.body;
    db.create(body, (err, data) => {
      if (err) {
        res.send(err).status(500);
      } else {
        res.send(data).status(201);
      }
    });
  });

mongoose.connect("mongodb+srv://todo:rhino94@cluster0.qlbrh.mongodb.net/<dbname>?retryWrites=true&w=majority",{
    useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
},()=>console.log("connected"))

mongoose.connection.once("open",()=>{
    console.log("dp open")
})
const port = process.env.PORT || 8000;
app.listen(port, () => console.log("port created"));