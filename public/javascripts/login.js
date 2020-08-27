login_func = () => {
    var user = document.getElementById("username-input").value;
    var pass = document.getElementById("password-input").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        if (this.responseText.startsWith("fail")){
          window.location.href = "https://uniez.herokuapp.com";
        }
        else {
          var s = this.responseText;
          sessionStorage.setItem('sid', s.split('=')[1]);
          window.location.href = s;
        }
      }
    };
    xhttp.open("POST", "/", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("user=" + user + "&pass=" + pass);
}
key_press = (e) => {
    if(e.keyCode === 13){
        login_func();
    }
}