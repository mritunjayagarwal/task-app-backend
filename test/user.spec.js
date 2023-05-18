const mocha = require('mocha');
const { assert, expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/index');
chai.use(chaiHttp);


describe('Task Api', (done) => {
    it('Get User route', () => {
        chai.request(server)
        .get('/users')
        .end((err, response) => {
            expect(response.status).to.be.equal(200);
        })
    })
    it('Add User route', () => {
        chai.request(server)
        .get('/users')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({name: 'test', email: 'new@gmail.com', password: 'pradhyuman', age: 28})
        .end((err, response) => {
            expect(response.status).to.be.equal(200);
        })
    })
})