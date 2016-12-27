# updateQuery({url:String}, Object)

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
