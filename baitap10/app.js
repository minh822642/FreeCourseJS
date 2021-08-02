//bai1
const click1 = () => {
    let index1 = document.getElementById("index1");
    if (index1.style.display === "none") {
        index1.style.display = "block";
    } else
        index1.style.display = "none";
}

//bai2
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const click2 = () => {
    let index2 = document.getElementById("index2");
    index2.style.backgroundColor = randomColors();

}

//bai3
const click3 = () => {
    let index3a = document.getElementById("index3a");
    let index3b = document.getElementById("index3b");
    let temp;
    if (index3a.textContent != index3b.textContent) {
        temp = index3a.textContent;
        index3a.textContent = index3b.textContent;
        index3b.textContent = temp;
    }
}

//bai4
let index4 = document.getElementById("index4");
let fontChange = index4.style.fontSize.split("px");
const click4a = () => {
    fontChange[0]++;
    index4.style.fontSize = fontChange[0] + "px";
}
const click4b = () => {
    fontChange[0]--;
    index4.style.fontSize = fontChange[0] + "px";
}
