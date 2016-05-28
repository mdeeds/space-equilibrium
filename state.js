
var State = function(data_element) {
  this.t = data_element[0];
  this.pos = $V([data_element[2], data_element[3], data_element[4]]);
  this.vel = $V([data_element[5], data_element[6], data_element[7]]);
}

