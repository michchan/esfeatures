/**
 * Before es2018
 * 
 * Successfully matching a regular expression against a string returns a match object matchObj. Putting a fragment of the regular expression in parentheses turns that fragment into a capture group: the part of the string that it matches is stored in matchObj.
 * 
 * * a capture group => regex put in parentheses
 */
const RE_DATE = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj[1]; // 1999
const month = matchObj[2]; // 12
const day = matchObj[3]; // 31

/**
 * Referring to capture groups via numbers has several disadvantages:
 * - Finding the number of a capture group is a hassle: you have to count parentheses.
 * - You need to see the regular expression if you want to understand what the groups are for.
 * - If you change the order of the capture groups, you also have to change the matching code.
 */