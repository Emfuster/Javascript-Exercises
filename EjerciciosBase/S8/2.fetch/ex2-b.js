/*En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...
'El nombre X tiene un Y porciento de ser de Z' etc etc.*/




const baseUrl = 'https://api.nationalize.io?name=';

const btn$$=document.querySelector("button");
const input$$=document.querySelector("input")


const search = () => {
    fetch(baseUrl+input$$.value)
    .then ((response)=>{
        return response.json()
    })
    .then ((myJson) => {
        for (let i = 0; i < myJson.country.length; i++) {
            const countries = myJson.country[i];
            const country = countries.country_id;
            const probability = countries.probability;
            const name = myJson.name;
            const p$=document.createElement("p")
            p$.textContent ="El nombre " + name + " tiene un " + probability *100  + " de ser " + country
            console.log(p$);
            document.body.appendChild(p$)
        }
    })
}

btn$$.addEventListener("click", search)



