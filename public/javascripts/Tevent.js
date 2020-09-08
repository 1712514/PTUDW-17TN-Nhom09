function loadFilename() {
  var fn = document.getElementById("customFile").value;
  var lastIndex = fn.lastIndexOf("\\");
  if (lastIndex >= 0) {
    fn = fn.substring(lastIndex + 1);
  }
  document.getElementById("input-label").textContent = fn;
}

function relocateHomepage() {
  location.href = "https://uniez.herokuapp.com/users/teacher/thomepage/";
}

function getEnter() {
  document.addEventListener("keyup", event => {
    if (event.keyCode === 13) {
      relocateHomepage();
    }
  })
}

getEnter();
function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

document.getElementById('random-please').innerHTML="Key của cuộc thi là " + makeid(6);