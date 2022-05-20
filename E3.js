let customize = function (color = "whitesmoke", bckColor = "gray", fontSz = "30px") {
    this.style.fontSize = fontSz;
    this.style.color = color;
    this.style.backgroundColor = bckColor;
}

const div = document.querySelector(".container");

const getCustom = customize.bind(div, "yellow", "black");
getCustom();
