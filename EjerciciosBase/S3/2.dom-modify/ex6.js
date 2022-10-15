
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement("ul")

for (let i = 0; i < apps.length; i++) {
    const element = apps[i];

    const li$$ = document.createElement("li")
    li$$.textContent = element;
    ul$$.appendChild(li$$)
}

document.body.appendChild(ul$$)



