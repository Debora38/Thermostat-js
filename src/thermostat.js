function Thermostat() {
  this._defaultTemperature = 20
  this.temperature = this._defaultTemperature;
  this._minTemperature = 10;
  this.powerSaving = true;
  this._MaxTemperature = 25;
}

Thermostat.prototype.increase = function() {
  this.checkPowerSavingMode();
  if(this.temperature + 1 <= this._MaxTemperature) {
    this.temperature += 1;
  } else {
    throw 'Can\'t go above ' + this._MaxTemperature;
  };
};

Thermostat.prototype.decrease = function() {
  if(this.temperature - 1 >= this._minTemperature) {
    this.temperature -= 1;
  } else {
    throw 'Can\'t go under ' + this._minTemperature;
  };
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
}

Thermostat.prototype.checkPowerSavingMode = function() {
  if (this.powerSaving) {
    this._MaxTemperature = 25;
  }
  else {
    this._MaxTemperature = 32;
  };
};

Thermostat.prototype.reset = function () {
  this.temperature = this._defaultTemperature;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return 'low-usage';
  } else if (this.temperature < 25) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  };
};
