console.log('Starting app');

setTimeout(() => {
  console.log('Inside callback');
}, 2010);

setTimeout(() => {
    console.log('Second callback');
}, 0);

console.log('Finishing');