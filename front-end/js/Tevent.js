function loadFilename() {
  var fn = document.getElementById("customFile").value;
  var lastIndex = fn.lastIndexOf("\\");
  if (lastIndex >= 0) {
    fn = fn.substring(lastIndex + 1);
  }
  document.getElementById("input-label").textContent = fn;
}

function relocateHomepage() {
  location.href = "../html/Thomepage.html";
}

function getEnter() {
  document.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
      relocateHomepage();
    }
  })
}

getEnter();
