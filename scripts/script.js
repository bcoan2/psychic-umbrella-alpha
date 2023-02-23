$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#fname")
    .$("#sendName")
    .click(function () {
      //console.log($("#fname").val());
      $("#greetingOutput").text("Hello " + $("#fname").val());
    });
});