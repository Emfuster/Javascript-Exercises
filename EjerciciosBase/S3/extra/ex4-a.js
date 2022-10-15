
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

    div$$.innerHTML = `<h4>${title$$}</h4><img src='${img$$}'/>`;
    document.body.appendChild(div$$)
}
