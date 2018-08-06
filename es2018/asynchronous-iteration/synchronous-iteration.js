
/**
 * Synchronous iteration
 * 
 * Synchronous iteration was introduced with ES6 and works as follows:

Iterable: an object that signals that it can be iterated over, via a method whose key is Symbol.iterator.

Iterator: an object returned by invoking [Symbol.iterator]() on an iterable. It wraps each iterated element in an object and returns it via its method next() – one at a time.

IteratorResult: an object returned by next(). Property value contains an iterated element, property done is true after the last element (value can usually be ignored then; it’s almost always undefined).

I’ll demonstrate via an Array:
 */

const iterable = ['a', 'b'];
const iterator = iterable[Symbol.iterator]();
iterator.next()
// { value: 'a', done: false }
iterator.next()
// { value: 'b', done: false }
iterator.next()
// { value: undefined, done: true }