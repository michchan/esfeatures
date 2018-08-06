/**
 * an asynchronous version of the for-of loop: 
 */
async function f() {
    for await (const x of createAsyncIterable(['a', 'b'])) {
        console.log(x);
    }
}
// Output:
// a
// b

/**
 * for-await-of with rejection
 */
function createRejectingIterable() {
    return {
        [Symbol.asyncIterator]() {
            return this;
        },
        next() {
            return Promise.reject(new Error('Problem!'));
        },
    };
}
(async function () { // (A)
    try {
        for await (const x of createRejectingIterable()) {
            console.log(x);
        }
    } catch (e) {
        console.error(e);
            // Error: Problem!
    }
})(); // (B)

/**
 * Therefore, the following two statements are roughly similar.
 * 
 * The second statement is faster, because Promise.all() only creates the Promise for the Array after all Promises in syncIterableOverPromises are fulfilled. And for-of has to await that Promise. In contrast, for-await-of starts processing as soon as the first Promise is fulfilled.
 */
for (const x of await Promise.all(syncIterableOverPromises));
for await (const x of syncIterableOverPromises);

// Iterating over a sync iterable over Promises:
async function main() {
    const syncIterable = [
        Promise.resolve('a'),
        Promise.resolve('b'),
    ];
    for await (const x of syncIterable) {
        console.log(x);
    }
}
main();

// Output:
// a
// b

// Iterating over a sync iterable over normal values:
async function main() {
    for await (const x of ['c', 'd']) {
        console.log(x);
    }
}
main();

// Output:
// c
// d