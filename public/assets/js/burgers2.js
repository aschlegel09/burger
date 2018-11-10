//  Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // for (var i = 0; i < burgers.lenght; i++) {
  //   var burgerBtn = $("<button>");

  //   burgerBtn.addClass("burger burger-button button");

  //   burgerBtn.attr("data-letter", burgers[i]);

  // burgerBtn.text(burgers[i]);
  // $("#eaten").append(burgerBtn);

  $(".devour").on("click", function(event) {
    var burgerDiv = $("<div>");

    burgerDiv.addClass("burger-div");

    burgerDiv.text($(this).attr("data-letter"));

    var id = $(this).data("id");
    var devouredAttr = $(this).val("devoured");

    console.log("button clicked");
    console.log(id);
    // console.log(devouredAttr);

    // var devouredState = {
    //   devoured: devouredAttr
    // };

    // Send the PUT request.//not working
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: id
    }).then(function() {
      $("#eaten").append(burgerDiv);
      console.log("changed eaten status to", devouredAttr);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#clear").on("click", function() {
    $("#eaten").empty();
  });

  //creates new burger
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burger")
        .val()
        .trim(),
      devoured: $("[burger_name=devoured]:checked").val()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("added a new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
