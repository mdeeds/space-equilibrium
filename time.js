

// Date(0) == JD 2440587.500000
// javascript_date.valueOf() = milliseconds since Jan 1, 1970
var toJulian = function(javascript_date) {
  return 2440587.500000 +
    javascript_date.valueOf() / 1000 / 60 / 60 / 24
}

var fromJulian = function(julian_date) {
  return new Date((julian_date - 2440587.500000) * 
    24 * 60 * 60 * 1000);
}
