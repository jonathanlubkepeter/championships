const mongoose = require('mongoose');

mongoose.connect('mongodb://database:27017/championships', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(db => console.log('Database is conected to ', db.connection.host))
    .catch(error => console.error(error));

module.exports = mongoose;