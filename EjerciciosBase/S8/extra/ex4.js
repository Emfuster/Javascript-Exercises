
const personApi = "http://localhost:3000/characters?idPlanet=";
const planetApi = "http://localhost:3000/planets";


fetch(planetApi)
.then((response) => {
    return response.json()
})
.then((myJson) =>{
    console.log(myJson)
    planets(myJson)
})




const planets$$=document.querySelector("[data-function='planets']")
const person$$=document.querySelector("[data-function='characters']")

const planets = (element) =>{
    for (let i = 0; i < element.length; i++) {
        const planet = element[i];
        const name = planet.name 
        const id = planet.id
        const planetimg= planet.image;
        const planetImg$$ = document.createElement("img");
        planetImg$$.setAttribute("src", planetimg);
        planets$$.appendChild(planetImg$$);
        planetImg$$.addEventListener("click", ()=>person(id))
        //

    }
}

const person = (element) =>{
fetch(personApi + element)
.then((response) => {
    return response.json()
})
.then((myJson2) =>{
    console.log(myJson2);

    

    const pintaPerson = () =>{
        person$$.textContent=""
            for (let i = 0; i < myJson2.length; i++) {

                const myj2 = myJson2[i];
                const avatar = myj2.avatar;
                const imagen$$ = document.createElement("img");
                imagen$$.setAttribute("src", avatar);
                person$$.appendChild(imagen$$)
                
            }
        }
    pintaPerson()
})}

        