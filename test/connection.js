const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//connect to the db before tests are run
before((done)=>{
//Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', () => {
    console.log('Connection has been made!')
    done();
}).on('error', (error) => {
    console.log('Connection error:', error)
})
})

//drop the character collection before every test
beforeEach((done) => {
    //drop the collection
    mongoose.connection.collections.mariochars.drop(() => {
    done();
})
    
});

//find will return all result , findone will get only the first result
//find methods work on the models themselves
//save work on the instances

//deleting records:
// "instance".remove(),
// "Model".remove(ex: name) same af find will delete all matched results,
// "Model".findOneAndRemove(ex: name)
