function relocateScoreboard() {
<<<<<<< HEAD
  location.href = "../student/sscoreboard";
=======
  location.href = "../html/Sscoreboard?sid="+sessionStorage.getItem('sid');
>>>>>>> 484b6a657241c4b8cfa7372a03fe447fb2b8f24e
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