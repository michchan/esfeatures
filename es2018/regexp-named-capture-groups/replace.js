/**
 * The string method replace() supports named capture groups in two ways.
 */

/**
 * First, you can mention their names in the replacement string:
 */

const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
console.log('1999-12-31'.replace(RE_DATE,
    '$<month>/$<day>/$<year>'));
    // 12/31/1999

/** Second, each replacement function receives an additional parameter that holds an object with data captured via named groups. For example (line A):
 */

const RE_DATE = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
console.log('1999-12-31'.replace(
    RE_DATE,
    (g0,y,m,d,offset,input, {year, month, day}) => // (A)
        month+'/'+day+'/'+year));
    // 12/31/1999

//These are the parameters of the callback in line A:

// - g0 contains the whole matched substring, '1999-12-31'
// - y, m, d are matches for the numbered groups 1–3 (which are created via the named groups year, month, day).
// - offset specifies where the match was found.
// - input contains the complete input string.
// - The last parameter is new and contains one property for each of the three named capture groups year, month and day. We use destructuring to access those properties.

// The following code shows another way of accessing the last argument:
console.log('1999-12-31'.replace(RE_DATE,
    (...args) => {
        const {year, month, day} = args[args.length-1];
        return month+'/'+day+'/'+year;
    }));
    // 12/31/1999