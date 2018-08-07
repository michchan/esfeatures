/**
 * (before es2018)
 * A lookahead assertion inside a regular expression means: whatever comes next must match the assertion, but nothing else happens. That is, nothing is captured and the assertion doesn’t contribute to the overall matched string.
 */

// Take, for example, the following regular expression

const RE_AS_BS = /aa(?=bb)/;
It matches the string 'aabb', but the overall matched string does not include the b’s:

const match1 = RE_AS_BS.exec('aabb');
console.log(match1[0]); // 'aa'
Furthermore, it does not match a string that doesn’t have two b’s:

const match2 = RE_AS_BS.exec('aab');
console.log(match2); // null
// A negative lookahead assertion means that what comes next must not match the assertion. For example:

> const RE_AS_NO_BS = /aa(?!bb)/;
> RE_AS_NO_BS.test('aabb')
false
> RE_AS_NO_BS.test('aab')
true
> RE_AS_NO_BS.test('aac')
true