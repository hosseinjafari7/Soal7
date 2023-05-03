$("#exampleModal").on("hidden.bs.modal", function (e) {
  var formContent = $("#exampleModal").find("form").html();

  $("#myModalContent").append(formContent);
});

