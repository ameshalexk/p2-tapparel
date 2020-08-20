// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
const MONGOURI= process.env.MONGOURI;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false
});

// mongoose connection

mongoose.connection.once('open', () => {
    console.log("connected to mongo");
    
})

// Controller
const shirtsController = require('./controllers/shirts.js');

app.get('/static/about', (req, res)=>{
    res.render('static/About')
  })

app.use('/shirts', shirtsController);

app.get('/',(req, res)=> {
    res.redirect('/Index.html')
})

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});
