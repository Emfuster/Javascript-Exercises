
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];


const cositas = cities.map(city=>{
    const name = city.name;
    const visited = city.isVisited;

    if(visited === true ){
        return name + "(Visitado)"
    } else{
    return name
}
})

console.log(cositas)