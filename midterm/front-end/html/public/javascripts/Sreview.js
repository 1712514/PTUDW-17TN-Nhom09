var card = document.querySelector(".flip-card");
card.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
});

var radio = document.getElementsByClassName("form-check-input");
for (let i = 0; i < radio.length; ++i) {
    radio[i].addEventListener("change", function () {
        document.getElementById("a").style.color = "white";
        document.getElementById("b").style.color = "white";
        document.getElementById("c").style.color = "white";
        document.getElementById("d").style.color = "white";
        if (this.value == "A") {
            this.parentNode.children[1].style.color = "green";
        } else {
            this.parentNode.children[1].style.color = "red";
        }
    });
}
