describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be able to print default temperature", function() {
    expect(thermostat.temperature).toEqual(thermostat._defaultTemperature);
  });

  it('can increase the temperature', function() {
    thermostat.increase(5);
    expect(thermostat.temperature).toEqual(25);
  });

  it('can decrease the temperature', function() {
    thermostat.decrease(5);
    expect(thermostat.temperature).toEqual(15);
  });

  it('does not allow to decrease the temperature less than 10', function() {
    expect( function(){ thermostat.decrease(11) } ).toThrow('Can\'t go under ' + thermostat._minTemperature);
  });

  it('power saving mode is on my default', function() {
    expect(thermostat.powerSaving).toEqual(true);
  });

  it('cant increase the temperature above 25 in power saving mode', function() {
    thermostat.checkPowerSavingMode()
    expect( function(){ thermostat.increase(6) } ).toThrow('Can\'t go above ' + thermostat._MaxTemperature);
  });

  it('cant increase the temperature above 32 not in power saving mode', function() {
    thermostat.powerSavingOff()
    thermostat.checkPowerSavingMode()
    expect( function(){ thermostat.increase(13) } ).toThrow('Can\'t go above ' + thermostat._MaxTemperature);
  });

  it('can reset the temperature to default', function() {
    thermostat.increase(3)
    thermostat.reset()
    expect(thermostat.temperature).toEqual(thermostat._defaultTemperature)
  });

  it('should return low usage', function() {
    thermostat.decrease(3)
    expect(thermostat.energyUsage()).toEqual('low-usage')
  });

  it('should return medium usage', function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage')
  });

  it('should return high usage', function() {
    thermostat.increase(5)
    expect(thermostat.energyUsage()).toEqual('high-usage')
  });
});
