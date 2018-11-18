// Import the burger model to gain access to the database functions
var burger = require('../../../models/burger.js');

// Import the connection file directly, in order to terminate the connection at the end of the test run
var connection = require('../../../config/connection.js');

// Select all entries from the database
burger.selectAll(function (data) {
	console.log('burger.selectAll test...\n\n');

	console.log('__________Burger Menu__________\n');

	for (var i = 0; i < data.length; i++) {
		console.log('Burger ID = ' + data[i].id);
		console.log('Burger Name = ' + data[i].burger_name);
		console.log('Available = ' + data[i].devoured);

		console.log('+++++++++++++++++++++++++++++++++++++++');
	}
});

// Insert a single entry into the database
burger.insertOne(['burger_name', 'devoured'], 
	         	 ['Late Night Juicy Burger', false], 
	    		 function (data) {
					console.log('\n\nburger.insertOne test...\n\n');

					console.log('Inserted new row with ID = ' + data.insertId + '\n\n');
				 }
);

// Update a single entry in the database
burger.updateOne({devoured: true}, 'id = 10', function (data) {
	console.log('\n\nburger.updateOne test...\n\n');

	console.log('Result: ' + data.message);
});

connection.end();

// //  Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   // for (var i = 0; i < burgers.lenght; i++) {
//   //   var burgerBtn = $("<button>");

//   //   burgerBtn.addClass("burger burger-button button");

//   //   burgerBtn.attr("data-letter", burgers[i]);

//   // burgerBtn.text(burgers[i]);
//   // $("#eaten").append(burgerBtn);

//   $(".devour").on("click", function(event) {
//     var burgerDiv = $("<div>");

//     burgerDiv.addClass("burger-div");

//     burgerDiv.text($(this).attr("data-letter"));

//     var id = $(this).data("id");
//     var devouredAttr = $(this).val("devoured");

//     console.log("button clicked");
//     console.log(id);
//     console.log(devouredAttr);

//     var devouredState = {
//       devoured: devouredAttr
//     };

//     // Send the PUT request.//not working

//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: devouredState
//     }).then(function() {
//       $("#eaten").append(burgerDiv); 
//       console.log("changed eaten status to", devouredAttr);
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });

//   // clear the current eaten burgers
//   $("#clear").on("click", function() {
//     $("#eaten").empty();
//   });

//   //creates new burger
//   $(".create-form").on("submit", function(event) {
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#burger")
//         .val()
//         .trim(),
//       devoured: $("[burger_name=devoured]:checked").val()
//     };

//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(function() {
//       console.log("added a new burger");
//       // Reload the page to get the updated list
//       location.reload();
//     });
//   });
// });
