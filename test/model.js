process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();
let expect = chai.expect;

/* Models */
let Model = require('../models/Model.js');

chai.use(chaiHttp);

describe('Model', () => {

  before('Description', (done) => {
    done();
  });

  after((done) => {
    done();
  });

  beforeEach((done) => {
    done();
  });

  afterEach((done) => {
    done();
  });

  /*
  * Test the /POST routes
  */

  describe('Describe here', () => {

    it('it should do something ...', (done) => {

      /*
      chai.request(server)
          .post('/address')
          .send(account)
          .end((err, res) => {
              res.should.have.status(200);
              //res.should.be.json;
              res.body.should.have.property('token');
              res.body.token.should.have.to.be.a('string');
              res.body.should.have.property('success');
              res.body.success.should.have.to.be.a('boolean');

              let error = false;

              if (error) {
                throw new Error(msg);
              }

              done();
          });
      */

      done();

    });

  });
  //END Describe

});
