/**
 * Example: reading text lines asynchronously
Let’s implement code that reads text lines asynchronously. We’ll do it in three steps.
 */

//Step 1: read text data in chunks via the Node.js ReadStream API (which is based on callbacks) and push it into an AsyncQueue (which was introduced in the previous section).
 
/**
 * Creates an asynchronous ReadStream for the file whose name
 * is `fileName` and feeds it into an AsyncQueue that it returns.
 *
 * @returns an async iterable
 */
function readFile(fileName) {
    const queue = new AsyncQueue();
    const readStream = createReadStream(fileName,
        { encoding: 'utf8', bufferSize: 1024 });
    readStream.on('data', buffer => {
        const str = buffer.toString('utf8');
        queue.enqueue(str);
    });
    readStream.on('end', () => {
        // Signal end of output sequence
        queue.close();
    });
    return queue;
}

//Step 2: Use for-await-of to iterate over the chunks of text and yield lines of text.

/**
 * Turns a sequence of text chunks into a sequence of lines
 * (where lines are separated by newlines)
 *
 * @returns an async iterable
 */
async function* splitLines(chunksAsync) {
    let previous = '';
    for await (const chunk of chunksAsync) {
        previous += chunk;
        let eolIndex;
        while ((eolIndex = previous.indexOf('\n')) >= 0) {
            const line = previous.slice(0, eolIndex);
            yield line;
            previous = previous.slice(eolIndex+1);
        }
    }
    if (previous.length > 0) {
        yield previous;
    }
}

//Step 3: combine the two previous functions. We first feed chunks of text into a queue via readFile() and then convert that queue into an async iterable over lines of text via splitLines().

/**
 * @returns an async iterable
 */
function readLines(fileName) {
    // `queue` is an async iterable
    const queue = readFile(fileName);
    return splitLines(queue);
}

// Lastly, this is how you’d use readLines() from within a Node.js script:

(async function () {
    const fileName = process.argv[2];
    for await (const line of readLines(fileName)) {
        console.log('>', line);
    }
})();