// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-eaten").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("newState");
  
      var newEatenState = {
        eaten: newState
      };
  
      // Send the PUT request.
      $.ajax("/api/icecream/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed eaten to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newFlavor = {
        name: $("#ca").val().trim(),
        eaten: $("[name=eaten]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/flavors", {
        type: "POST",
        data: newFlavor
      }).then(
        function() {
          console.log("created new flavor");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  