function NewDiv (color,bckcolor,fontSz){
    this.color = color;
    this.bckcolor = bckcolor;
    this.fontSz = fontSz;
}

NewDiv.prototype.create = function (){
    let container = document.querySelector(".container");
    let div = document.createElement("div");
    if (this.bckcolor === undefined || this.fontSz === undefined || this.color === undefined){
        div.style.fontSize = "20px";
        div.style.color = "whitesmoke";
        div.style.backgroundColor = "gray";
    } else {
        div.style.fontSize = this.fontSz;
        div.style.color = this.color;
        div.style.backgroundColor = this.bckcolor;
    }
    div.innerHTML = "New div!";
    container.appendChild(div);
}

let div = new NewDiv("black","yellow");
div.create();
