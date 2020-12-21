const express = require('express')
const app = express()
const articleRouter = require('./routes/articles')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog',
{
    useNewUrlParser : true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))



app.get('/', (req,res)=> {
    const articles = [{
        title: 'Test Article',
        createdAt : new Date(),
        description: 'Test desc'
    },
    {
        title: 'Test Article',
        createdAt : new Date(),
        description: 'Test desc'
    }]

    res.render('articles/index', {articles:articles})
})

app.use('/articles',articleRouter)
app.listen(5000)