var Body = function(clock) {
  this.states = [];
  this.clock = clock
}

Body.prototype.addState = function(state) {
  this.states.push(state);
}

// Eventually this should use a time range and also interpolate.
Body.prototype.getPositions = function() {
  var result = [];
  for (var i = 0; i < this.states.length; ++i) {
    var pos = this.states[i].pos;
    result.push(pos);
  }
  return result;
}

Body.prototype.positionAt = function(julian_time) {
  console.err("Not implemented.");
}

Body.prototype.currentPosition = function() {
  return this.positionAt(this.clock.currentTime());
}
