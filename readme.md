# Cachenator
Store data in key value with configurable expiry time.

## Install

```
$ npm install cachenator
```

## Usage

```js
import Cachenator from 'cachenator';

const store = new Cachenator('animals');

store.set('dog', 🐶); // Default is one day
store.get('dog');
//=> 🐶

// Wait for 1 day...
store.get('dog');
//=> null


store.set('cat', 🐱, 1000);
store.get('cat');
//=> 🐱

// Wait for 1 second...
store.get('cat');
//=> null


```


## License

MIT © [Christopher Ribeiro](https://github.com/ChristoPy)