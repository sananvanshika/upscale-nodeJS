const express =  require('express')


const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.get('/hc', (req, res, next) => {
    console.log('this is middle , cheking the request')
    next();
}, (req, res, next) => {
    console.log('23242323 this is ')
     next()
},(req, res) => {
    res.json({data : "ths is data", message : " this is message"})
})

// app.update('/up/:id', () => {

// })

app.post('/new/:id', (req, res) =>{
    console.log('query -->', req.query)
    console.log('param', req.params.id)
    console.log('body', req.body)


    res.sendStatus(200)
})


app.listen((5000) ,()=>{
    console.log("Server is running on port 5000")
})