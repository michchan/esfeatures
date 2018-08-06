/**
 * Async function vs Async Generator function
 */
// Async function:

// Returns immediately with a Promise.
// That Promise is fulfilled via return and rejected via throw.
(async function () {
    return 'hello';
})()
.then(x => console.log(x)); // hello

(async function () {
    throw new Error('Problem!');
})()
.catch(x => console.error(x)); // Error: Problem!

// Async generator function:

// Returns immediately with an async iterable.
// Every invocation of next() returns a Promise. yield x fulfills the “current” Promise with {value: x, done: false}. throw err rejects the “current” Promise with err.
async function* gen() {
    yield 'hello';
}
const genObj = gen();
genObj.next().then(x => console.log(x));
    // { value: 'hello', done: false }