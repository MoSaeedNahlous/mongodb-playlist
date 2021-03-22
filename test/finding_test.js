const assert = require('assert')
const MarioChar = require('../models/mariochar')
//describe test
describe('finding records', () => {
    
    var char;

    beforeEach((done) => {
        char = new MarioChar({
            name: 'Mario',
            weight: 100
        })
        char.save().then(() => {
            done();
        })
    })

    
    it('finds one record in the database', (done) => {

        MarioChar.findOne({ name: 'Mario' }).then((result) => {
            assert(result.name === "Mario")
            done()
        })
        
    })

    it('finds one record in the database by ID', (done) => {
        MarioChar.findOne({ _id: char._id }).then((res) => {
            assert(res._id.toString() === char._id.toString());
            done();
        })
    })

})