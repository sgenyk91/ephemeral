var should = require('should');
var expect = require('chai').expect;
var request = require('supertest');

var app = require('./../server')
 
describe('Server Endpoints', function(){
  request = request('http://localhost:9000');
  var events = '/api/events';
  describe('Event API', function(){
    it('GET "api/events/" should send non empty response', function(done) {
      request
        .get(events)
        .expect(200)
        .end(function (err, res) {
          if (err) done(err);
          done();
        });
    });

    it('GET api/events/:id should send the event with requested id', function(done) {
      
      done()
    });

    it('should have a responsive POST api/events/  ', function(done) {
      done()
    });
  });
});

// Static server
  // index html
  // css, js and bower lib files

// Auth 
  // signup should create new user
  // signup errors are raised at the right moments
  // login should be able to login with correct credentials
  // login should not login with wrong credentials
  // logout should log out
  // protected api should not be accessible without sending session token