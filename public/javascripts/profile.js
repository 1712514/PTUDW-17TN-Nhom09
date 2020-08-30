getAvatarURI = () => {
    return "/resource/avatar.jpg";
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
    console.log(rowdata);
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
console.log(sessionStorage.getItem('sid'));
fetch('http://localhost:3000/api/user/' + document.cookie.split(';')[1].split('=')[1]).then(response => response.json()).then(data =>{
    document.getElementById("avatar").setAttribute("src", getAvatarURI());
    document.getElementById("nameinfo").innerHTML += data[0].name;
    document.getElementById("emailinfo").innerHTML += data[0].email;
    //document.getElementById("passwordinfo").innerHTML += getPassword();
    var body = document.getElementById("achiebody");
    for(var i = 0; i < data[0].history.length; i++){
        console.log(data[i]);
        body.appendChild(createRow([data[0].history[i].id_event,data[0].history[i].score]));
    }
});
