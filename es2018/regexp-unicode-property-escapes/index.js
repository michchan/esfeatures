/**
 * Ref:
 * http://exploringjs.com/es2018-es2019/ch_regexp-unicode-property-escapes.html
 */

/**
 * Before es2018
 * JavaScript lets you match characters by mentioning the “names” of sets of characters
 * For example, \s stands for “whitespace”
 */
/^\s+$/u.test('\t \n\r')
true

/**
 * The proposal lets you additionally match characters by 
 * mentioning their Unicode character properties (what those are is explained next) 
 * inside the curly braces of \p{}. Two examples:
 */
> /^\p{White_Space}+$/u.test('\t \n\r')
true
> /^\p{Script=Greek}+$/u.test('μετά')
true