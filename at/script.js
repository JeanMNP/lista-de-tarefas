let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
let span = document.createElement("span");
let txt = document.createTextNode("\u00D7"); //caracter x
span.className = "close";
span.appendChild(txt);
myNodelist[i].appendChild(span);
}
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
close[i].onclick = function() {
let div = this.parentElement;
div.style.display = "none";
}
}
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
if (ev.target.tagName === 'LI') {
ev.target.classList.toggle('checked');
}
}, false);
const dataAtual = new Date();
const dia = dataAtual.getDate(); // Dia do mês (1-31)
const mes = dataAtual.getMonth() +1; // Mês (0-11, janeiro é 0)
const ano = dataAtual.getFullYear();
function addElemento() {
    let li = document.createElement("li");
    let inputValue =document.getElementById("tarefa").value;
    let t = document.createTextNode(dia+'/'+mes+'/'+ano+' '+inputValue);
    li.appendChild(t);
    if (inputValue === '') {
    alert("Você precisa descrever a tarefa");
    } else {
    document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
    }
    }
    }
    function limparEle(){

    }