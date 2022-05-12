let customize = function (color, bckColor, fontSz) {
    if (bckColor === undefined || fontSz === undefined || color === undefined) {
        this.style.fontSize = "30px";
        this.style.color = "whitesmoke";
        this.style.backgroundColor = "gray";
    } else {
        this.style.fontSize = fontSz;
        this.style.color = color;
        this.style.backgroundColor = bckColor;
    }
}

const div = document.querySelector(".container");

const getCustom = customize.bind(div, "black", "yellow", "40px");
getCustom();
