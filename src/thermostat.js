function Thermostat() {
  this._defaultTemperature = 20
  this.temperature = this._defaultTemperature;
  this._minTemperature = 10;
  this.powerSaving = true;
  this._MaxTemperature = this._PSMaxTemperature;
  this._PSMaxTemperature = 25;
  this._PSOffMaxTemperature = 32;
  this._MediumUsageMinTemperature = 18;
  this._MediumUsageMaxTemperature = 25
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
    this._MaxTemperature = this._PSMaxTemperature
  }
  else {
    this._MaxTemperature = this._PSOffMaxTemperature
  };
};

Thermostat.prototype.reset = function () {
  this.temperature = this._defaultTemperature;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < this._MediumUsageMinTemperature) {
    return 'low-usage';
  } else if (this.temperature >= this._MediumUsageMaxTemperature) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  };
};
