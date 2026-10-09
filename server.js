import express from "express";
import sum from "./sum.js";

const app = express();
const Port = 8000;

app.listen(Port, () => {
    console.log(`server is listing on ${Port}`);
})

app.get("/home", async (req, res)=> {
    res.json({
        msg: "I am root!"
    });
})

app.get("/getsum/:a/:b", async (req, res)=> {
    const {a,b} = req.params;

    res.json({
        ans: sum(parseInt(a),parseInt(b))
    })
})
