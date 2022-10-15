

const orden$$ = (element) =>{
    return element.sort((a, b)=> new Date(a.date) - new Date(b.date))
}

   fetch('http://localhost:3000/diary')
   .then((response) => {
    return response.json();
    
  })
  .then((myJson) => {
    console.log(myJson);
    const ordenlist = orden$$(myJson);

    pintar$$(ordenlist);

})


   const pintar$$=(element)=>{
    for (let i = 0; i < element.length; i++) {
        const objetos$$ = element[i];
        const div$$=document.createElement("div");
        const title$$=document.createElement("h3");
        title$$.textContent= objetos$$.title;
        const date$$=document.createElement("span");
        date$$.textContent= objetos$$.date;
        const desc$$ = document.createElement("p");
        desc$$.textContent= objetos$$.description;
        div$$.appendChild(date$$)
        div$$.appendChild(title$$)
        div$$.appendChild(desc$$)
        document.body.appendChild(div$$)
        //
    }
}
