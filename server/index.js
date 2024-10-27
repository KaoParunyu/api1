const express = require('express');
const app = express();
const port = 3000 ;
const cors = require('cors');
app.use(cors());


app.use(express.json());

let userid = [
    {
    id : 1,
    title: "bestsport",
    body: "fotball"
},
    {
    id : 2,
    title: "bestsport",
    body: "fotball"
},
    {
    id : 3,
    title: "bestsport",
    body: "fotball"
}
];



app.get('/api/user',(req,res) =>{
    res.send(userid)
})

app.listen(port, ()=>{
    console.log('listening on http://localhost:${port}');
    
})