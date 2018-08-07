/**
 * The use cases for lookaround assertions are:
 */
replace()
match() //(especially if the regular expression has the flag /g)
split() //(note the space at the beginning of ' b,c'):

> 'a, b,c'.split(/,(?= )/)
[ 'a', ' b,c' ]
