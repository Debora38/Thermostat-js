describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be able to play a Song", function() {
    expect(thermostat.temperature).toEqual(20);
  });

});
