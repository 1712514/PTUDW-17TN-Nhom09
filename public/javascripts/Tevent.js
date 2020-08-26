function loadFilename() {
  var fn = document.getElementById("customFile").value;
  var lastIndex = fn.lastIndexOf("\\");
  if (lastIndex >= 0) {
    fn = fn.substring(lastIndex + 1);
  }
  document.getElementById("input-label").textContent = fn;
}

function relocateHomepage() {
<<<<<<< HEAD
  location.href = "../teacher/thomepage";
=======
  location.href = "../html/Thomepage?sid="+sessionStorage.getItem('sid');
>>>>>>> 484b6a657241c4b8cfa7372a03fe447fb2b8f24e
}

function getEnter() {
  document.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
      relocateHomepage();
    }
  })
}

getEnter();
