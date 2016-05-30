var Display = function(svgContainer) {
  this.container = svgContainer;
  var self = this;

  this.container.on("wheel.zoom", function(d, i) { self.handleWheel(d3, d,i); });
  this.bodies = [];
  this.paths = [];

  this.width = parseInt(svgContainer.attr("width"));
  this.height = parseInt(svgContainer.attr("height"));
  this.size = Math.min(this.width, this.height);

  this.scale = Matrix.I(3).x(this.size / 6e8);
  this.look_at = $V([0,0,0]);
  this.screen_translate = $V([this.width / 2.0, this.height / 2.0, 0]);
}


/** static */
Display.lineFunction = d3.svg.line()
    .x(function(d) { return d.elements[0]; })
    .y(function(d) { return d.elements[1]; })
     .interpolate("cardinal");


Display.prototype.handleWheel = function(d, i) {
  // d3.mouse and d3.event don't work here.  Probably because
  // something isn't bound
  var e = window.event; 

  var coords = "(" + e.offsetX + "," + e.offsetY + ")";

  // Today with my mouse values are 120 for wheel up and -120 for
  // wheel down.  Using my track pad, the values are between 2 and
  // 110.
  var amount = Math.pow(2.0, e.wheelDeltaY / 120.0);
  console.log("Zoom " + amount + " at " + coords);

  this.scale = this.scale.x(amount);
  this.refresh();
}


Display.prototype.screenPositions = function(body) {
  var positions = body.getPositions();
  for (var i = 0; i < positions.length; ++i) {
    positions[i] = positions[i].subtract(this.look_at);
    positions[i] = this.scale.x(positions[i]);
    positions[i] = positions[i].add(this.screen_translate);
  }
  return positions;
}

Display.prototype.addBody = function(body) {
  this.bodies.push(body);
  var positions = this.screenPositions(body);
  var lineGraph = this.container.append("path")
        .attr("d", Display.lineFunction(positions))
        .attr("stroke", "blue")
        .attr("stroke-width", 2)
        .attr("fill", "none");
  this.paths.push(lineGraph);
}

Display.prototype.refresh = function() {
  for (var i = 0; i < this.bodies.length; ++i) {
    body = this.bodies[i];
    path = this.paths[i];
    var positions = this.screenPositions(body);
    path.attr("d", Display.lineFunction(positions));
  }
}
