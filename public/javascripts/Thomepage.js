var news = [
    { title: "Thi thử lần 1 - Ngày 01/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 2 - Ngày 02/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 3 - Ngày 03/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 4 - Ngày 04/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 5 - Ngày 05/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 6 - Ngày 06/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 7 - Ngày 07/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 8 - Ngày 08/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 9 - Ngày 09/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 10 - Ngày 10/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 11 - Ngày 11/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 12 - Ngày 12/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 13 - Ngày 13/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 14 - Ngày 14/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 15 - Ngày 15/05/2020", ref: "../teacher/Tscoreboard"},
    { title: "Thi thử lần 16 - Ngày 16/05/2020", ref: "../teacher/Tscoreboard"},
];


function relocate_create() {
<<<<<<< HEAD
    location.href = "../teacher/tevent";
=======
    location.href = "../teacher/Tevent/?sid="+sessionStorage.getItem('sid');
>>>>>>> 484b6a657241c4b8cfa7372a03fe447fb2b8f24e
}

function show_news() {
    for (var i=0; i<news.length; i++) {
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.setAttribute("href", news[i].ref);
        a.setAttribute("class", "news-line");
        a.setAttribute("target", "_blank");
        a.appendChild(document.createTextNode(news[i].title));
        var ul = document.getElementById("news-board");
        li.appendChild(a);
        ul.appendChild(li);
    }
}

function getEnter() {
    document.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        relocate_create();
      }
    })
  }
  
show_news();
getEnter();