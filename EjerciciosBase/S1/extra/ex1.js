const users = [
    {name: "Abel", years: 43}, 
    {name: "Maria", years: 18}, 
    {name: "Pedro", years: 14}, 
    {name: "Samantha", years: 32}, 
    {name: "Raquel", years: 16}
];

for( let i = 0 ; i <= 4; i++){
    if(users[i].years < 18){
        console.log(users[i].name + " Usuario menor de edad")
    } else{
        console.log(users[i].name + " Usuario mayor de edad")
    }
}