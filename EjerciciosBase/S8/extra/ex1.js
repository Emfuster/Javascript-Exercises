
const api = "https://breakingbadapi.com/api/characters"



fetch(api)
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
    

    for (let i = 0; i < myJson.length; i++) {
        const all$$ = myJson[i];
        const imagenes$$ = all$$.img
        const img$$ = document.createElement("img");
        const div$$ = document.createElement("div");
        div$$.appendChild(img$$);
        img$$.setAttribute("src", imagenes$$);
        document.body.appendChild(div$$);
    
  }});

