// TODO: add a "clock" to the constructor here. 
var Body = function() {
  this.states = [];
}

Body.prototype.addState = function(state) {
  this.states.push(state);
}

// Static - it should impact every instance
Body.setReference = function(body) {
  console.err("Not implemented.");
}

// Eventually this should use a time range and also interpolate.
Body.prototype.getPositions = function() {
  var result = [];
  for (var i = 0; i < this.states.length; ++i) {
    result.push(this.states[i].pos);
  }
  return result;
}
