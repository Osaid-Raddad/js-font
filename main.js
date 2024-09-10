

function add(){
    document.querySelector(".item").classList.add("add");
    document.querySelector(".item").classList.remove("subtract");
}

function sub(){
    document.querySelector(".item").classList.add("subtract");
    document.querySelector(".item").classList.remove("add");
}

document.querySelector(".addBtn").onclick = add;
document.querySelector(".subtractBtn").onclick = sub;