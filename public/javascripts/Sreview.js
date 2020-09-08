//const { DocumentQuery } = require("mongoose");

key = 'S01';
flip = 0;
Run = (key) => {
    document.getElementById("a").style.color = "white";
    document.getElementById("b").style.color = "white";
    document.getElementById("c").style.color = "white";
    document.getElementById("d").style.color = "white";
    var ele = document.getElementsByName("optradio");
    for(var i=0;i<ele.length;i++)
       ele[i].checked = false;
    if(flip == 1){
        document.querySelector(".flip-card").classList.toggle("is-flipped");
        flip = 0;
    }
    fetch('https://uniez.herokuapp.com/api/questions/' + key).then(response => response.json()).then(data => {
    $("#content").text(data[0].content);
    $("#a").text(data[0].a);
    $("#b").text(data[0].b);
    $("#c").text(data[0].c);
    $("#d").text(data[0].d);
    $("#sol").text(data[0].sol);
    var card = document.querySelector(".flip-card");
    card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
        flip = (flip + 1) % 2;
    });

    var radio = document.getElementsByClassName("form-check-input");
    for (let i = 0; i < radio.length; ++i) {
        radio[i].addEventListener("change", function () {
            document.getElementById("a").style.color = "white";
            document.getElementById("b").style.color = "white";
            document.getElementById("c").style.color = "white";
            document.getElementById("d").style.color = "white";
            if (this.value == data[0].ans.toUpperCase()) {
                this.parentNode.children[1].style.color = "green";
            } else {
                this.parentNode.children[1].style.color = "red";
            }
        });
    }
});
}
Run(key);
Next = () => {
    var temp = parseInt(key.slice(1,key.length)) + 1;
    key = "S";
    if(temp < 10) key = key + "0";
    key = key + temp;
    console.log(key);
    var card = document.querySelector(".flip-card");
    card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
        flip = (flip + 1) % 2;
    });
    Run(key);
}
Previous = () => {
    var temp = parseInt(key.slice(1,key.length)) - 1;
    if(temp < 0){
        key = key;
    }
    else{
    key = "S";
    if(temp < 10) key = key + "0";
    key = key + temp;
    console.log(key);}
    var card = document.querySelector(".flip-card");
    card.addEventListener("click", function () {
        card.classList.toggle("is-flipped");
        flip = (flip + 1) % 2;
    }); 
    Run(key);
}
