
const btn$$ = document.createElement("button");
btn$$.setAttribute("id", "btnToClick");
btn$$.textContent="pulsame"
document.body.appendChild(btn$$);

function clickMe (event){
    console.log(event.target)
}

btn$$.addEventListener("click", clickMe )

function hola (){
    console.log("hellooo")
}

btn$$.addEventListener("mouseover", hola)

function adios(){
    console.log("adios")
}

btn$$.addEventListener("mouseout",adios)