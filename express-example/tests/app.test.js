const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect;
const app = require('../app');

chai.use(chaiHttp);

before(async() => {
    await app.on('APP_STARTED', () => { return; });
});

describe('Basic API Testing', () => {
    it('GET Request on path /', async() => {
        try{
            const response = await chai.request(app).get('/');
            expect(response).to.have.status(200);
        } catch(e){
            throw e;
        }        
    });
});
