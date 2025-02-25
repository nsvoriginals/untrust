import express ,{Request , Response} from "express";

const app=express()

app.get("/",(req:Request,res:Response)=>{
     res.json({
        message:"Hello there"
     })
})
app.post("/testing",(req,res)=>{
  res.json({message:"hello there"})
})

app.listen(3001,()=>{
   console.log("Server is running on port 3000")
})