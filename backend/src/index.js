const express = require ('express');
const mongoose = require ('mongoose');

const app = express();

mongoose.connect('mongodb+srv://Gabriel:303466@cluster0.r1l69.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,

});

app.get('/' , (req,res)=> {
    return res.send(`Hello ${req.query.name}`);
});


app.listen(3333);   