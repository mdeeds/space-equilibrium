
Vector = function(xx, yy, zz) {
  this.x = xx;
  this.y = yy;
  this.z = zz;
}

Vector.prototype.getLength() {
  return sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
}

Vector.prototype.scale(s) {
  this.x = this.x * s;
  this.y = this.y * s;
  this.z = this.z * s;
  return this;
}

Vector.prototype.add(v) {
  this.x += v.x;
  this.y += v.y;
  this.z += v.z;
}

Vector.prototype.getCopy() {
  return new Vector(this.x, this.y, this.z);
}

Vector.prototype.getCross(v) {
  
}

Vector.prototype.getDot(v) {
  return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
}


Vector.prototype.rotate(a) {
 // https://en.wikipedia.org/wiki/Rodrigues%27_rotation_formula

  var theta = a.getLength();
  var k = this.getCopy().scale(1.0 / theta);

  var a = this.getCopy().scale(Math.cos(theta));
  var b = k.getCross(this).scale(Math.sin(theta));
  var c = k.getCopy().scale(k.getDot(this)).scale(1 - Math.cos(theta));

  return a.add(b).add(c);
}

MassiveBody = function(position, velocity, mass) {
  this.pos = position;
  this.vel = velocity;
  this.m = mass;
}

SUN_MASS = 1.989e30;

var sun = new MassiveBody(new Vector(0, 0, 0), new Vector(0, 0, 0), SUN_MASS);

var PI=3.14159265458;

var EARTH_MASS = 5.972e24; // kg
var EARTH_R = 149.60e6 // km
var EARTH_V = 2 * PI * EARTH_R / 365.256 / 24 / 60 / 60;
var EARTH_POS = new Vector(EARTH_R, 0, 0);
var EARTH_VEL = new Vector(EARTH_V, 0, 0);
var earth = new MassiveBody(EARTH_POS, EARTH_VEL, EARTH_MASS);

// https://en.wikipedia.org/wiki/Orbit_of_the_Moon
var MOON_MASS = ;
var MOON_R = 384748;
var MOON_V = 2 * PI * MOON_R / 27.3 / 24/ 60 / 60;
var MOON_INCL = 5.14 / 180 * PI;
var MOON_POS = new Vector(MOON_R, 0, 0);
MOON_POS = 

var moon = new MassiveBody(new Vector(EARTH_R + MOON_R, 0, 0), 
    new Vector(0, EARTH_V + MOON_V, 0), MOON_MASS);
