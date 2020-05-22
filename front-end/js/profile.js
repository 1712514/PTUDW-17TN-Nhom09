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
    return "../resource/avatar.jpg";
}
getAchievement = () => {
    return {
        1: 10,
        2: 9,
        3: 10,
        4: 10,
        5: 9,
        6: 10,
        7: 10,
        8: 9,
        9: 10
    }
}
createRow = (rowdata) => {
    var tr = document.createElement("tr");
    tr.setAttribute("class", "font-white");
    var th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = rowdata[0];
    var td = document.createElement("td");
    td.textContent = rowdata[1];
    tr.appendChild(th);
    tr.appendChild(td);
    return tr;
}
fillAchievement = () => {
    var data = getAchievement();
    var body = document.getElementById("achiebody");
    Object.keys(data).forEach(function(key){
        body.appendChild(createRow([key, data[key]]));
    })
}

document.getElementById("avatar").setAttribute("src", getAvatarURI());
document.getElementById("nameinfo").innerHTML += getFullName();
document.getElementById("emailinfo").innerHTML += getEmail();
//document.getElementById("passwordinfo").innerHTML += getPassword();
fillAchievement();
