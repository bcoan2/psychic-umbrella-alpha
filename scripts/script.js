$(document).ready(function () {
  console.log("Ready to roll");


  $("#btnGetFacts").click(function () {
    $("#coolNameFactsOutput").html();

    let userName = $("#userName").val();
    console.log("user name = ", userName);

    console.log("spirit animal f/n = ", getSpiritAnimal(userName));

    console.log("you clicked the button");

    $("#coolNameFactsOutput").html(getSpiritAnimal(userName));

  });
});


// Spirit animal function
function getSpiritAnimal(name) {

  
  return 'Hello, ' + name;
}






