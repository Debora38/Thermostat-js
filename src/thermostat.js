function Thermostat() {
  this.temperature = 20;
  this._minTemperature = 10;
}

Thermostat.prototype.increase = function(num) {
  this.temperature += num;
};

Thermostat.prototype.decrease = function(num) {
  if(this.temperature - num >= this._minTemperature) {
    this.temperature -= num;
  } else {
    throw 'Can\'t go under ' + this._minTemperature;
  };
};
