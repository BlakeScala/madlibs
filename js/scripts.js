$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nounInput = $("input#noun").val();
    var noun2Input = $("input#noun2").val();
    var verbInput = $("input#verb").val();
    var adjInput = $("input#adj").val();
    var adverbInput = $("input#adverb").val();

    $(".noun").text(nounInput);
    $(".noun2").text(noun2Input);
    $(".verb").text(verbInput);
    $(".adj").text(adjInput);
    $(".adverb").text(adverbInput);

    $("#story").show();

    event.preventDefault();
  });
  $("#letter-form form").submit(function(event) {
    var nameInput = $("input#toName").val();
    var otherName = $("input#fromName").val();

    $(".toName").text(nameInput);
    $(".fromName").text(otherName);

    $("#letter").show();

    event.preventDefault();
  });
});
