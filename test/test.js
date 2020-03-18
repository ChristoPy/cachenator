const Cachenator = require('../src');


const myCache = new Cachenator('cache');


myCache.set('test', 123, 300);
console.log(myCache.get('test'))
setTimeout(() => console.log(myCache.get('test')), 299)

setTimeout(() => console.log(myCache.get('test')), 500)

myCache.set('test', 456, 1000);


setTimeout(() => console.log(myCache.get('test')), 999)

setTimeout(() => console.log(myCache.get('test')), 2000)
