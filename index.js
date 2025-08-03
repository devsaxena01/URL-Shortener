const express = require('express')
const urlRoute = require('./routes/url')
const {connectToMongoDB} = require('./connect')
const app = express()
const PORT = 8001

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=> console.log('MongoDB connected'))

app.use(express.json())

app.use('/' , urlRoute)
// app.use('/shortId' , urlRoute)
// app.use('/analytics/shortId' , urlRoute)

app.listen(PORT , () => {
    console.log(`server is running on port: ${PORT}`);
    
})