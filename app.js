const app = require('express')()

app.get('/', (req,res) => {
    //res.send("you are on the home page")
    res.sendFile(__dirname + "/index.html")
})0

app.get('/about me', (req,res) => {
    //res.send("you are on the about me page")
    res.sendFile(__dirname + "/about me.html")
})

app.get('/profile/:name', (req,res) => {
    //res.send(`${req.params.name} you're viewing the contact's profile`)
    const personInfo = { age: 30, job: 'IT', languages: ["Turkish", "French", "English"], admin: true}
    res.render('profile' ,{person:req.params.name, data: personInfo})
})



app.listen(process.env.PORT || 5000, () => {
    console.log('http://localhost:3000/');
})