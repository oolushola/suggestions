var chai = require('chai');
var chaiHttp = require('chai-http');
var app  = require('../app');

chai.use(chaiHttp);
chai.should();

describe('suggestions /', ()=>{
    describe('/suggestions', ()=>{
        it('should not load suggestions if no city is specified', (done) => {
            const query = {
                q: ''
            }
            chai.request(app)
            .post('/suggestions')
            .send(query)
            .end((err, res)=>{
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.status.should.be.eql(400);
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('email is required');
                done();
            })
        })
    })
})