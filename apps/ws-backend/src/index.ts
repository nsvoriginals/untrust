import WebSocket,{ WebSocketServer } from "ws"
const wss=new WebSocketServer({port:8080})

wss.on("connection",(wss)=>{
    console.log('New client connected');
    ws.on("message",(message:string)=>{
       
        wss.clients.forEach((client)=>{
            client.send(message)
        })
    })
    ws.on("close",()=>{
        console.log("server disconnected successfully")
    })
})