const movies = [{name: "Your Name", durationInMinutes: 130},
    {name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
    {name: "Origen", durationInMinutes: 165}, 
    {name: "El señor de los anillos", durationInMinutes: 967}, 
    {name: "Solo en casa", durationInMinutes: 214}, 
    {name: "El jardin de las palabras", durationInMinutes: 40}
];

let shortMovie =[]
let mediumMovie =[]
let bigMovie =[]

for (i=0; i < movies.length; i++){
    if(movies[i].durationInMinutes < 100){
        shortMovie.push(movies[i].name);
    }else if  (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200){
        mediumMovie.push(movies[i].name);
    } else{
        bigMovie.push(movies[i].name)
    }

}


//console.log("Pelis Cortas " + bigMovie, "Pelis Medianas " + mediumMovie, "Pelis Largas" +bigMovie)
console.log("Pelis cortas: " + shortMovie);
console.log("Pelis medianas: " + mediumMovie);
console.log("Pelis largas: " + bigMovie);

