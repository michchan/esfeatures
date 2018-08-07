/**
 * The proposed feature is about identifying capture groups via names:

(?<year>[0-9]{4})

The name must be a legal JavaScript identifier (think variable name or property name). 
After matching, 
you can access the captured string via matchObj.groups.year.

The captured strings are not properties of matchObj, because you don’t want them to clash with current or future properties created by the regular expression API.
 */
const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;

const matchObj = RE_DATE.exec('1999-12-31');
const year = matchObj.groups.year; // 1999
const month = matchObj.groups.month; // 12
const day = matchObj.groups.day; // 31

// Destructuring can help with getting data out of the match object:

const {groups: {day, year}} = RE_DATE.exec('1999-12-31');
console.log(year); // 1999
console.log(day); // 31

/**
 * Named capture groups have the following benefits:
 * - It’s easier to find the “ID” of a capture group.
 * - The matching code becomes self-descriptive, as the ID of a capture group describes what is being captured.
 * - You don’t have to change the matching code if you change the order of the capture groups.
 * - The names of the capture groups also make the regular expression easier to understand, as you can see directly what each group is for.
 */