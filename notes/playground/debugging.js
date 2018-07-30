var person = {
  name: 'Mike',
  age: 26,
};

person.age = 28;

debugger;

person.name = 'Michael';

console.log(person);

// node inspect debugging.js
// nodemon inspect debugging.js (allows changes to be made and debug restarts)
// repl
// 'debugger' acts as a breakpoint - just inspect, c
// nodemon --inspect-brk debuggin.js - opens in chrome dev tools