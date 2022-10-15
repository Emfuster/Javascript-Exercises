//En base al ejercicio anterior, crea un botón con el texto 'X' 
//para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado.

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
            const btnn$$ = document.createElement("button");
            btnn$$.textContent = "X"
            
            const p$=document.createElement("p")
            p$.textContent ="El nombre " + name + " tiene un " + probability *100  + " de ser " + country
            console.log(p$);
            document.body.appendChild(p$)
            document.body.appendChild(btnn$$)

            const delete$$= () =>{
             p$.remove()
             btnn$$.remove()
            }
            btnn$$.addEventListener("click",delete$$)
        }
    })
}

btn$$.addEventListener("click", search)

