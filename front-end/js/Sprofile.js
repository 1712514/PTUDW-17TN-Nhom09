getFullName = () => {
    return "Nguyễn Minh Quân";
}
getEmail = () => {
    return "nguyenquanfake@gmail.com";
}
getPassword = () => {
    return  "hihihaha";
}
getAvatarURI = () => {
    return "../resource/avatar.jpeg";
}
getAchievement = () => {
    return {
        1: 10,
        2: 9,
        5: 10
    }
}
createRow = (rowdata) => {
    var tr = document.createElement("tr");
    tr.setAttribute("class", "font-white");
    var th = document.createElement("th");
}
fillAcheivement = () => {
    var data = getAchievement();
    var body = document.getElementById("achiebody");

    
}

document.getElementById("avatar").setAttribute("src", getAvatarURI());
document.getElementById("nameinfo").innerHTML += getFullName();
document.getElementById("emailinfo").innerHTML += getEmail();
document.getElementById("passwordinfo").innerHTML += getPassword();
