const request = require('supertest');
const expect = require('expect');

// This is how we can import the app we exported
let app = require('./server').app;

// describe: lets you group tests together
describe('Server', () => {
  // This test should... done allows for async tests
  describe('GET /', () => {
    it('should return page not found', (done) => {
      request(app)
        .get('/')
        //.expect(200)
        .expect(404)
        //.expect({
        //  error: 'Page not found.'
        //})
        //.expect('Hello world!')
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found.'
          });
        })
        .end(done);
    });
    
    it('should return a user object { name: \'Mike\', age: 26 }', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Mike',
            age: 26
          });
        })
        .end(done);
    });
  })  
});