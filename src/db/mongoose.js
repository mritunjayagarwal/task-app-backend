const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://root:root123@cluster0.kmf0zov.mongodb.net/', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})