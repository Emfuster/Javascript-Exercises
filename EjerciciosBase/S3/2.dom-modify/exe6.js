// Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$=document.createElement("ul");
document.body.appendChild(ul$$)

for (let i = 0; i < apps.length; i++) {
    const apps$$ = apps[i];
    const li$$=document.createElement("li");
    li$$.textContent= apps$$;
    ul$$.appendChild(li$$)
    
}


