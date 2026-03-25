$(document).ready(function () {

  $("#add-btn").click(function () {
    var task = $("#task-input").val();

    if (task) {
      $("#task-list").append(
        '<li>' +
        '<input type="checkbox">' +
        '<span class="text">' + task + '</span>' +
        '<span class="delete">X</span>' +
        '</li>'
      );

      $("#task-input").val("");
    }
  });

  // delete
  $(document).on("click", ".delete", function () {
    $(this).parent().remove();
  });

  // checkbox toggle
  $(document).on("change", "input[type='checkbox']", function () {
    $(this).parent().toggleClass("completed");
  });

});