const countries = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];


for (let i = 0; i < countries.length; i++) {
    const country = countries[i];
    const div$$ = document.createElement("div");
    const img$$ = country.imgUrl
    const title$$ = country.title;
    const btnn$$ = document.createElement("button");
    btnn$$.textContent = "Remove Me";

    function delete$$(){
        div$$.remove()
    }
    btnn$$.addEventListener("click", delete$$)
    


    div$$.innerHTML = `<h4>${title$$}</h4><img src='${img$$}'/>`;
    div$$.appendChild(btnn$$);
    document.body.appendChild(div$$);
}

const btn$$ = document.querySelector("button");

function deleteAll$$(){
   const allDiv$$ = document.querySelectorAll("div");
   allDiv$$[allDiv$$.length - 1].remove()
}

btn$$.addEventListener("click", deleteAll$$)

