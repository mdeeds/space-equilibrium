// TODO: add a "clock" to the constructor here. 
var Body = function() {
  this.positions = [];
}

Body.prototype.addPosition = function(data_element) {
  var state = new State(data_element);
  this.positions.push(state);
}

// Static - it should impact every instance
Body.setReference = function(body) {
  console.err("Not implemented.");
}

// Eventually this should use a time range and also interpolate.
Body.prototype.getPositions = function() {
  return this.positions;
}
