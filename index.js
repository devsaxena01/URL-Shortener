const express = require('express')
const urlRoute = require('./routes/url')
const {connectToMongoDB} = require('./connect')
const path = require('path')
const URL = require('./models/url')
const staticRoute = require('./routes/staticRouter')

const app = express()
const PORT = 8001

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('MongoDB connected'))

app.set('view engine' , 'ejs')
app.set('views' , path.resolve('./views'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/url' , urlRoute)
app.use('/' , staticRoute)
// app.use('/shortId' , urlRoute)
// app.use('/analytics/shortId' , urlRoute)

app.listen(PORT , () => {
    console.log(`server is running on port: ${PORT}`);
    
})