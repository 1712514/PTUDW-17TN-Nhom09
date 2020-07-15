login_func = () => {
    var input = document.getElementById("username-input").value;
    if (input == "student"){
        document.getElementById("btn-login-signup").href="/users/student/Shomepage";
        window.location.href = "/users/student/Shomepage";
    }
    else if (input == "teacher"){
        document.getElementById("btn-login-signup").href="/users/teacher/Thomepage";
        window.location.href = "/users/teacher/Thomepage";
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