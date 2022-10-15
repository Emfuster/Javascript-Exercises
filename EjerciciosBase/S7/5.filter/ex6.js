
const streamers = [
    {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
    {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
     {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
     {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
    ];


const algo = streamers.filter(streamer=>{
    const legend = streamer.gameMorePlayed.includes("Legends"); 
    if(streamer.age > 35){
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    return legend;
})


 console.log(algo)
