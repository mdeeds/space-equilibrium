
var Load = function() {}


Load.step1_ = function(block, on_load_body) {
  var bodies = [];

  $.each(block, function(key, val) {
    console.log('Object name: ' + key);
    var data = val.data;
    var body = new Body();
    for (var i = 0; i < data.length; ++i) {
      body.addPosition(data[i]);
    }
    bodies.push(body);
  });
 
  for (var i = 0; i < bodies.length; ++i) {
    on_load_body(bodies[i]);
  }
}

Load.load = function(source_uri, on_load_body) {
  $.getJSON(source_uri, function(block) {Load.step1_(block, on_load_body);});
}
