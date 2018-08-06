/**
 * Using an asynchronous iterable looks as follows. Function createAsyncIterable() is explained later. It converts its synchronously iterable parameter into an async iterable.
 */
const asyncIterable = createAsyncIterable(['a', 'b']);
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
asyncIterator.next()
    .then(iterResult1 => {
        console.log(iterResult1); // { value: 'a', done: false }
        return asyncIterator.next();
    })
    .then(iterResult2 => {
        console.log(iterResult2); // { value: 'b', done: false }
        return asyncIterator.next();
    })
    .then(iterResult3 => {
        console.log(iterResult3); // { value: undefined, done: true }
    });

/**
 * Within an asynchronous function, you can process the results of the Promises via await and the code becomes simpler:
 */
async function f() {
    const asyncIterable = createAsyncIterable(['a', 'b']);
    const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    console.log(await asyncIterator.next());
        // { value: 'a', done: false }
    console.log(await asyncIterator.next());
        // { value: 'b', done: false }
    console.log(await asyncIterator.next());
        // { value: undefined, done: true }
}

/**
 * In TypeScript notation, the interfaces look as follows.
 */
interface AsyncIterable {
    [Symbol.asyncIterator]() : AsyncIterator;
}
interface AsyncIterator {
    next() : Promise<IteratorResult>;
}
interface IteratorResult {
    value: any;
    done: boolean;
}
