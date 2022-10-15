fetch("https://ghibliapi.herokuapp.com/films")
.then((response) => {
    return response.json()
})
.then((myJson) =>{
    console.log(myJson)
    content(myJson)
})


const content = (element) => {
    for (const peli of element) {
        const img$$ = document.createElement("img");
        const img = peli.image;
        const desc = peli.description;
        const desc$$ = document.createElement("p");
        desc$$.textContent= desc;
        img$$.setAttribute("src", img);
        const title$$ = document.createElement("h2");
        title$$.textContent= peli.title;
        document.body.appendChild(title$$);
        document.body.appendChild(desc$$)
        document.body.appendChild(img$$);
        
    }
    
}