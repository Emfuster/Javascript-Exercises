
const input$$ = document.querySelector("input")

function inputVal(event){
    console.log(event.target.value)
}

input$$.addEventListener("input", inputVal)