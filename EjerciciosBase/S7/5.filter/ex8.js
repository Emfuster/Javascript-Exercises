
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const input$$ = document.querySelector("[data-function='toFilterStreamers']");
const btn$$ = document.querySelector("[data-function='toShowFilterStreamers']")
btn$$.addEventListener("click", ()=>busca(input$$.value))


const busca =(element)=>{
const search = streamers.filter(streamer =>{
    if (streamer.name.toLowerCase().includes(element.toLowerCase())){
        return streamer.name 
    }})
    console.log(search)

}