import test from 'ava'
import updateQuery from '../'

const url1 = 'test.com'
const url2 = 'test.com?a=0&b=1'

test('add new query', t => {
  t.is(updateQuery(url1, { a: 0, b: 1 }), url2)
})

test('update query', t => {
  t.is(updateQuery(url2, { a: 3, b: 4 }), 'test.com?a=3&b=4')
})

test('remove query', t => {
  t.is(updateQuery(url2, { a: '', b: null }), url1)
})
