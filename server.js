// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const session = require('express-session')


// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));
app.use(
    session({
      secret: process.env.SECRET, //a random string do not copy this value or your stuff will get hacked
      resave: false, // default more info: https://www.npmjs.com/package/express-session#resave
      saveUninitialized: false // default  more info: https://www.npmjs.com/package/express-session#resave
    })
  )
const MONGOURI= process.env.MONGOURI;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false , useCreateIndex: true
});

// mongoose connection

mongoose.connection.once('open', () => {
    console.log("connected to mongo");
    
})


// Controller
const shirtsController = require('./controllers/shirts.js');
const userController = require('./controllers/users_controller.js')
const sessionsController = require('./controllers/sessions_controller.js')
const customController = require('./controllers/custom.js')
const cshirtController = require('./controllers/cshirt.js')

app.use('/shirts', shirtsController);
app.use('/users', userController)
app.use('/sessions', sessionsController)
app.use('/custom', customController)
app.use('/cshirt', cshirtController)

app.get('/static/about', (req, res)=>{
  res.render('static/About')
})

app.get('/sessions/new', (req, res) => {
  res.render('sessions/New', { currentUser: req.session.currentUser });
});

app.get('/',(req, res)=> {
    res.redirect('/users/new')
})

// listen
app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
});
