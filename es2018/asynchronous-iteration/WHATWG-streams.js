/**
 * WHATWG streams are async iterables, meaning that you can use for-await-of to process them:
 */
const rs = openReadableStream();
for await (const chunk of rs) {
    //···
}