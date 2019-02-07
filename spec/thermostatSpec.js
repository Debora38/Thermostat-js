describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be able to play a Song", function() {
    expect(thermostat.temperature).toEqual(20);
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

});
