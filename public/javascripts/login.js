login_func = () => {
    var user = document.getElementById("username-input").value;
    var pass = document.getElementById("password-input").value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
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