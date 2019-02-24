$(document).ready(function () {
   thermostat = new Thermostat;
  $('.temperature').text(thermostat.temperature);
  $('.powersaving').text(thermostat.powerSaving);
  $('.energy').text(thermostat.energyUsage())
});

$('.up').on('click', function() {
  thermostat.increase();
  $('.temperature').text(thermostat.temperature);
  $('.energy').text(thermostat.energyUsage())
})

$('.down').on('click', function() {
  thermostat.decrease();
  $('.temperature').text(thermostat.temperature);
  $('.energy').text(thermostat.energyUsage())
})

$('.psbutton').on('click', function(){
  thermostat.powerSavingOnOff();
  $('.powersaving').text(thermostat.powerSaving);
  $('.temperature').text(thermostat.temperature);
})

$('.reset').on('click', function(){
  thermostat.reset()
  $('.powersaving').text(thermostat.powerSaving);
  $('.temperature').text(thermostat.temperature);
  $('.energy').text(thermostat.energyUsage())
})
