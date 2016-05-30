var World = function() {}

// TODO set reference frame should be in here somewhere.
// Also, clock should probably be exposed.

World.prototype.step1_ = function(block, on_load_body) {
  var bodies = [];

  $.each(block, function(key, val) {
    console.log('Object name: ' + key);
    var data = val.data;
    var body = new Body();
    for (var i = 0; i < data.length; ++i) {
      body.addState(new State(data[i]));
    }
    bodies.push(body);
  });
 
  for (var i = 0; i < bodies.length; ++i) {
    on_load_body(bodies[i]);
  }
}

World.prototype.load = function(source_uri, on_load_body) {
  var self = this;
  $.getJSON(source_uri, function(block) {self.step1_(block, on_load_body);});
}
