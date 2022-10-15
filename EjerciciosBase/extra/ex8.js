
const ship1 = {name: "Banca rota", damage: 44, pv: 150};
const ship2 = {name: "Cacique pero no", damage: 66, pv: 124}


const random = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}

const attack = (ship1, ship2) =>{
    
    for (let index = 0; index < 100; index++) {
    
    let attack1 = random(1, ship1.damage);
    ship2.pv -= attack1
    console.log("El ataque de la nave1 ha sido de " + attack1 + ", y la vida de la nave2 se queda en " + ship2.pv)
    if(ship2.pv <= 0){
        console.log("El ganador es " + ship1.name)
        break
    }

    let attack2 = random(0, ship2.damage);
    ship1.pv -= attack2;
    console.log("El ataque de la nave2 ha sido de " + attack2 + ", y la vida de la nave1 se queda en " + ship1.pv)
         
    if(ship1.pv <= 0){
        console.log("El ganador es " + ship2.name)
        break
    }
    }}

    console.log(attack(ship1, ship2))

