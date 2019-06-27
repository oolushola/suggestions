import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('suggestions /', ()=>{
    describe('/suggestions', ()=>{
        it('should load users suggestions', (done) => {
            const query = {
                q: 'sacramantasuki'
            }
            chai.request(app)
            .get('/api/v1/suggestions')
            .send(query)
            .end((err, res)=>{
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status');
                res.body.status.should.be.eql(200);
                res.body.should.have.property('message');
                res.body.message.should.be.eql('successful');
                done();
            })
        })
    })
})