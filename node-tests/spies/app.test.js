const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    // createSpy returns a function
    let spy = expect.createSpy();
    spy('Mike', 26);
    //expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('Mike', 26);
  });

  it('should call saveUser with user object', () => {
    let email = 'mike@example.com';
    let password = 'a1b2c3d4';
    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });
});