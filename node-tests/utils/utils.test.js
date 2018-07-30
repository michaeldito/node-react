const expect = require('expect');
const utils = require('./utils');

/* 

We could write the code like this

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  if (res !== 44) {
    throw new Error(`Expected: 44, but got ${res}.`);
  }
});

it('should square a number', () => {
  var res = utils.square(3);
  if (res !== 9) {
    throw new Error(`Expected: 9,but got ${res}.`);
  }
});

Or we can use the expect library like this

*/
describe('Utils', () => {
  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);
    
      expect(res).toBe(44).toBeA('number');
    });
    // We use done() when were doing something asynchronus
    it('should async add two numbers', (done) => {
      utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  })

  describe('#square', () => {
    it('should square a number', () => {
      var res = utils.square(3);
    
      expect(res).toBe(9).toBeA('number');
    });
    it('should asynch square two numbers', (done) => {
      utils.asynchSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
      });
    });
  })
  

  describe('#people', () => {
    it('should expect some values', () => {
      //expect(12).toNotBe(11);
      //expect({name: 'mike'}).toNotEqual({name: 'Mike'});
      //expect({name: 'Mike'}).toEqual({name: 'Mike'});
      //expect([2,3,4]).toInclude(5);
      //expect([2,3,4]).toExclude(2);
      expect({
        name: 'Mike',
        age: 26,
        location: 'Novato'
      }).toInclude({ //toExclude
        age: 26
      })
    });
    
    it('should set first and last name', () => {
      var user = {location: 'Novato', age: 26};
      var res = utils.setName(user, 'Mike Dito');
      expect(user).toInclude({
        firstName: 'Mike',
        lastName: 'Dito'
      });
    });
  });
  
});

