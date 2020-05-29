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
