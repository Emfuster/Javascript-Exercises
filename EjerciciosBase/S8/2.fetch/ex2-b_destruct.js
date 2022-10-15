const baseUrl = 'https://api.nationalize.io?name=';
const input$$ = document.querySelector('input');
const button$$ = document.querySelector('button');
const searchName = (name) => {
    fetch(baseUrl+name)
    .then((res) => res.json())
    // .then((myJson) => drawPs(myJson))
    .then((myJson) => suma(3,4))
}
const suma = (a,b) => {
    console.log(a + b)
}
const drawPs = (data) => {
    const {name, country} = data;
    for (let i = 0; i < country.length; i++) {
        const {country_id, probability} = country[i];
        const p$$ = document.createElement('p');
        p$$.textContent = "El nombre "+ name +" tiene un "+ probability*100 +" porciento de ser de " + country_id;
        document.body.appendChild(p$$);
    }
}
const drawPs2 = (data) => {
    for (let i = 0; i < data.country.length; i++) {
        const p$$ = document.createElement('p');
        p$$.textContent = "El nombre "+ data.name +" tiene un "+  data.country[i].probability*100 +" porciento de ser de " +  data.country[i].country_id;
        document.body.appendChild(p$$);
    }
}
button$$.addEventListener('click', ()=>searchName(input$$.value));