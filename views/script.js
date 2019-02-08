$(document).ready(function () {
   thermostat = new Thermostat;
  $('.temperature').text(thermostat.temperature);
});

$('.up').on('click', function() {
  thermostat.increase();
  $('.temperature').text(thermostat.temperature);
})
