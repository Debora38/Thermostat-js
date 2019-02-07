function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increase = function(num) {
  this.temperature += num;
}

Thermostat.prototype.decrease = function(num) {
  this.temperature -= num;
}
