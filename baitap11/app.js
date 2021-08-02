const btnAdd = document.getElementById("btn-add");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
btnAdd.onclick = () => {
    if (input.value) {
        const div = document.createElement("div")
        const li = document.createElement("li");
        const delBtn = document.createElement("button")
        li.innerHTML = input.value;
        delBtn.innerHTML = "DELETE";
        div.className = "div-li";
        li.className = "del";
        delBtn.className = "del";
        li.id = "li";
        delBtn.id = "btn-del";
        div.appendChild(li);
        div.appendChild(delBtn);
        ul.appendChild(div);
        input.value = "";
        li.onclick = () => {
            if (li.id === "li2") {
                li.id = "li";
            } else li.id = "li2"
        }
        delBtn.onclick = () => {
            div.remove();
        }
    } else
        alert("Empty input")
}

