login_func = () => {
    var input = document.getElementById("username-input").value;
    if (input == "student"){
        document.getElementById("btn-login-signup").href="../html/Shomepage.html";
        window.location.href = "../html/Shomepage.html";
    }
    else if (input == "teacher"){
        document.getElementById("btn-login-signup").href="../html/Thomepage.html";
        window.location.href = "../html/Thomepage.html";
    }
    else {
        alert("Sai tên đăng nhập hoặc mật khẩu!!!");
    }
}
key_press = (e) => {
    if(e.keyCode === 13){
        login_func();
    }
}