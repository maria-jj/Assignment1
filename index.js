//requiring express
const express = require('express');
//init the express app
const app = express();
//specifying a port
const port = 9000;

//API
app.get('/',(req, res)=>{
    res.send('hi from the express server!');
});

app.get("/api/penguins", (req, res)=>{
    //return dummy data
    const penguins = ["penguins are black and white", "penguins live in antarctica", "penguins swim", "penguins lay eggs", "penguins have feathers", "penguins love cold", "penguins are birds", "penguins live 15-20 years", "some penguins are up to 1m tall", "penguins cant fly"];
    res.send(JSON.stringify(penguins));
})

app.get("/api/bears", (req, res)=>{
    //return dummy data
    const bears = ["fact1", "fact2", "fact3", "fact4", "fact5", "fact6", "fact7", "fact8", "fact9", "fact10"];
    res.send(JSON.stringify(bears));
})

//running the express http server on port we specified
app.listen(port, ()=>{
    console.log("listening on port", port);
});