const apiCat="https://api.thecatapi.com/v1/images/search"

const btn$$=document.querySelector("[data-fn='callACat']");
btn$$.addEventListener("click", () => callACat());

const removeCat = (element)=>{
    element.remove()
}


const callACat = ()=>{
    fetch(apiCat)
    .then((response) =>{
        return response.json()
    })
    .then((myJson)=>{
        console.log(myJson[0]);
        const api = myJson[0];
        const imag = api.url;
        const img$$ = document.createElement("img");
        const div$$ = document.createElement("div");
        img$$.setAttribute("src", imag);
        div$$.appendChild(img$$)
        const btnRemove$$=document.createElement("button");
        btnRemove$$.textContent="BORRAME SI ERES UN PERRO"
        div$$.appendChild(btnRemove$$);
        btnRemove$$.addEventListener("click", ()=>removeCat(div$$));
        document.body.appendChild(div$$)

    })
}