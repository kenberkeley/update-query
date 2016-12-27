# updateQuery({url:String}, Object)

[![npm version][npm-v-img]][npm-url]
[![npm download][npm-dl-img]][npm-url]
[![build][build-img]][build-url]

> Update the query string of a url with the given object

### Installation

```
npm i update-query -S
```

### Usage
```
updateQuery('test.com?a=1', { b: 2 }) => 'test.com?a=1&b=2'
updateQuery('test.com?a=1&b=2', { a: '', b: 3 }) => 'test.com?b=3'
updateQuery('test.com?a=1&b=2', { a: '', b: null }) => 'test.com'
```

### Build

`npm run build`, output will be piped into `dist/`


### Test & Coverage

`npm test` & `npm run cov`

[npm-url]: https://www.npmjs.com/package/update-query
[npm-v-img]: http://img.shields.io/npm/v/update-query.svg
[npm-dl-img]: http://img.shields.io/npm/dm/update-query.svg
[build-img]: https://travis-ci.org/kenberkeley/update-query.svg?branch=master
[build-url]: https://travis-ci.org/kenberkeley/update-query
