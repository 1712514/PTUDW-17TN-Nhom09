
fetch('http://localhost:3000/api/history/su1820').then(response => response.json()).then(data => {
    // http://localhost:8080/history/su1820
    //ham khoi tao bxh
    var rank = document.getElementById("rank");
    console.log(data);
    for (var i = 0; i < data.length; ++i) {
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        th.scope = "row";
        th.textContent = i + 1;
        td1.textContent = data[i].name;
        td2.textContent = data[i].grade;
        console.log(th.textContent);

        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        rank.appendChild(tr);
    }
});
