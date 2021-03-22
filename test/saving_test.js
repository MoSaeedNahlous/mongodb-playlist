const assert = require('assert')
const MarioChar = require('../models/mariochar')
//describe test
describe('Saving records', (done) => {
    
    //Create test
    it('Saves a record to the database', () => {
        let char = new MarioChar({
            name: 'Mario',weight:100
        })
        char.save().then(() => {
            assert(char.isNew === false);
            done();
        })
    })

})