
const btn$$=document.createElement("button");
btn$$.textContent="push me bby"
btn$$.getAttribute("id","btnToClick");
const cns = (evento) =>{ console.log(evento.target)};
btn$$.addEventListener("click",cns)
document.body.appendChild(btn$$)

