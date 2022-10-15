
const divs$$ = document.querySelectorAll("div"); 
const p$$ = document.createElement("p")
p$$.textContent = "Voy al medio!"

document.body.insertBefore(p$$, divs$$[1]) 