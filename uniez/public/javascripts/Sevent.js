function relocateScoreboard() {
  location.href = "../html/Sscoreboard.html";
}

function getStartKey() {
  var input = document.getElementById("input-test-key");
  input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btn-start").click();
    }
  });
}

function getOkPopUp() {
  var popup = document.getElementById("exampleModal");
  popup.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      relocateScoreboard();
    }
  });
}

getStartKey();
getOkPopUp();