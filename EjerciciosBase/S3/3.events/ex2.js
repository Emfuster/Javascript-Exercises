
const input$$ = document.querySelector("input")

function focusValor$$ (evento){
     console.log(evento.target.value)
}

input$$.addEventListener("focus", focusValor$$)