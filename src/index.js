const express = require('express')
// require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect((process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true})
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

module.exports = app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
