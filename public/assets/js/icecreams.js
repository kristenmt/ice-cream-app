// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//     $(".eat-cone").on("click", function(event) {
//       var id = $(this).data("id");
//       //var newState = $(this).data("newState");
  
//       // var newEatenState = {
//       //   eaten: newState
//       // };
  
//       // Send the PUT request.
//       $.ajax("/api/icecream/" + id, {
//         type: "PUT",
//         data: {
//           eaten: true
//         }
//       }).then(
//         function() {
//           console.log("changed eaten to");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
  
//       var newFlavor = $("#ca").val().trim();
//       //{
//         // name: $("#ca").val().trim(),
//         // eaten: $("[name=eaten]:checked").val().trim()

//       // };
  
//       // Send the POST request.
//       $.ajax("/api/icecream", {
//         type: "POST",
//         data: newFlavor
//       }).then(
//         function() {
//           console.log("created new flavor");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
//   });


///////// new 9/12/18
$(document).ready(function() {
  $(".devour").on("click", function() {
    event.preventDefault();
    var id= $(this).attr("data-id");
    var data = {
      eaten: true
    }
   // console.log(flavor_id);
    $.ajax({
      method: "PUT",
      url: "/flavors/" + id,
      data: data
    }).then(function() {
      window.location.reload();
    });
    
  });
});
  