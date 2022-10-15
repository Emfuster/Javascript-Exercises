
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const fn$$=document.querySelector("[data-function]")
const ul$$=document.createElement("ul")

for (let i = 0; i < cars.length; i++) {
    const element = cars[i];
    const li$$ = document.createElement("li");
    li$$.textContent = element
    ul$$.appendChild(li$$)
    
}

fn$$.appendChild(ul$$)
