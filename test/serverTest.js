process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const should = chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe('Photos', function () {
  it('should load the home page on / GET', function (done) {
    this.timeout(60000);
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        if (err) return done(err);

        res.should.have.status(200);  // Expect HTTP 200
        res.should.be.html;           // Expect HTML response

        // Match actual HTML content
        expect(res.text).to.include('MILESTONE 2');
        expect(res.text).to.include('Image Upload');

        // Check that the images container exists
        expect(res.text).to.match(/<div class="row">/);

        done();
      });
});
});
