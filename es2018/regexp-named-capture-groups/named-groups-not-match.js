/**
 * If an optional named group does not match, its property is set to undefined (but still exists)
 */
const RE_OPT_A = /^(?<as>a+)?$/;
const matchObj = RE_OPT_A.exec('');

// We have a match:
console.log(matchObj[0] === ''); // true

// Group <as> didn’t match anything:
console.log(matchObj.groups.as === undefined); // true

// But property `as` exists:
console.log('as' in matchObj.groups); // true