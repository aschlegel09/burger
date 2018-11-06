// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    
  $("#update-btn").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // Get the ID by finding an element with a "name" attribute equal to the string "id"
    var id = $("[burger_name=id]").val().trim();

    var updatedPlan = {
      devoured: $("#update-btn [burger_name=devoured]").val().trim()
    };

    // Send the PUT request.
    $.ajax("api/burger/:" + id, {
      type: "PUT",
      data: updatedPlan
    }).then(
      function() {
        console.log("updated id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });



    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
      var devouredAttr = $(this).data("devoured");
  
      console.log("button clicked");

      var devouredState = {
        devoured: devouredAttr
      };

      // Send the PUT request.//not working
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed eaten status to", devouredAttr);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  //creates new burger
    $(".create-form").on("submit", function(event) {
 
        event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("added a new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  