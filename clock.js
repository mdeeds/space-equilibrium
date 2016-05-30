

var Clock = function(start_julian, end_julian, now_julian) {
  this.start_julian = start_julian;
  this.end_julian = end_julian ;
  if (now_julian) {
    this.now_julian = now_julian;
  } else {
    this.now_julian = end_julian;
  }
}


Clock.prototype.currentTime = function() {
  return this.now_julian;
}
