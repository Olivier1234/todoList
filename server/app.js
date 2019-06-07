const User = require('./models/user');
const Movie = require('./models/movie');
const db = require('./lib/db');
const express = require('express');
const movieRouter = require('./routes/movie');
const userRouter = require('./routes/user');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use('/',userRouter);
app.use('/movies',movieRouter);

 db.once('open', () => {

    let user = new User({
        firstname: "Fred",
        lastname: "Perry",
        email: "fred@oerry.com",
        birthday: new Date(),
        password: "test",
        rgpdValidator: true
    });

    //  user.register().then(data => console.log(data));


    // User.find().then(data => console.log(data));

    //Movie.find().then(data => console.log(data));

});

db.on('error', (error) => console.log(error, 'Error'));

app.listen(3000, () => console.log('listening'));