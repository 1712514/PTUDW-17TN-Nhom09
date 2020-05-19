var data = [
    { name: "Trần Quang Khải", grade: 10 },
    { name: "Trần Khải", grade: 8 },
    { name: "Trần Quang", grade: 9 },
    { name: "Trần Quang Huy", grade: 9 },
    { name: "Võ Ngọc Huy", grade: 9 },
    { name: "Võ Ngọc Hy", grade: 7 },
    { name: "Nguyễn Minh Quân", grade: 6 },
    { name: "Nguyễn Minh", grade: 6 },
    { name: "Phan Gia Hảo", grade: 6 },
    { name: "Trần Hiếu", grade: 6 },
    { name: "Trần Thạch", grade: 5 },
    { name: "Võ Huy", grade: 5 },
    { name: "Hiếu", grade: 5 },
    { name: "Mạnh", grade: 3 },
    { name: "Hoà", grade: 3 },
    { name: "Đức", grade: 3 },
];

sort = (data) => {
    for (var i = 0; i < data.length - 1; ++i) {
        for (var j = i + 1; j < data.length; ++j) {
            if (
                data[i].grade < data[j].grade ||
                (data[i].grade == data[j].grade && data[i].name > data[j].name)
            ) {
                var temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    console.log(data);
    return data;
};
data = sort(data);
//ham khoi tao bxh
var rank = document.getElementById("rank");
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
