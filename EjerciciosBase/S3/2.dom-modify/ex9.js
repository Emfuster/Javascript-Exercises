
fns$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < fns$$.length; i++) {
    fns = fns$$[i];
    const p$$ = document.createElement("p")
    p$$.textContent="Voy dentro!"
    fns$$.appendChild(p$$)
    
}