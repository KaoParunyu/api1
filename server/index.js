const express = require('express');
const app = express();
const port = 3000 ;
const cors = require('cors');
app.use(cors());


app.use(express.json());


let userid = [
    {
    username: "kao",
    password: "123",
    id : 1,
    title: ["bestsport1", " test1"], 
    body: "fotball"
},
    {
   
    id : 2,
    title: "bestsport222222222",
    body: "fotball"
},
    {
    id : 3,
    title: "bestsport33",
    body: "fotball"
}
];



app.get('/api/user',(req,res) =>{
    res.send(userid)
})


app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const foundUser = userid.find(user => user.username === username && user.password === password);

    if (foundUser) {
        res.status(200).json({ message: "Login successful", user: foundUser });
    } else {
        res.status(401).json({ message: "Invalid username or password" });
    }
});



app.listen(port, ()=>{
    console.log(`listening on http://localhost:${port}`);
    
})