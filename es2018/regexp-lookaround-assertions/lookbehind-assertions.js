/**
 * Lookbehind assertions work like lookahead assertions, but in the opposite direction.
 */

/**
 * Positive lookbehind assertions
 * 
For a positive lookbehind assertion, the text preceding the current location must match the assertion (but nothing else happens).
 */

const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
'$foo %foo foo'.replace(RE_DOLLAR_PREFIX, 'bar');
    // '$bar %foo foo'

// As you can see, 'foo' is only replaced if it is preceded by a dollar sign. You can also see that the dollar sign is not part of the total match, because the latter is completely replaced by 'bar'.

// Achieving the same result without a lookbehind assertion is less elegant:

const RE_DOLLAR_PREFIX = /(\$)foo/g;
'$foo %foo foo'.replace(RE_DOLLAR_PREFIX, '$1bar');
    // '$bar %foo foo'
// And this approach doesn’t work if the prefix should be part of the previous match:

> 'a1ba2ba3b'.match(/(?<=b)a.b/g)
[ 'a2b', 'a3b' ]

/**
 * Negative lookbehind assertions
 * 
A negative lookbehind assertion only matches if the current location is not preceded by the assertion, but has no other effect. For example:
 */

const RE_NO_DOLLAR_PREFIX = /(?<!\$)foo/g;
'$foo %foo foo'.replace(RE_NO_DOLLAR_PREFIX, 'bar');
    // '$foo %bar bar'