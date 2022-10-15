const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, 
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, 
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
    let alumnos = alumns[i];
    aprovedCount = 0;


    if(alumnos.T1 == true){
        aprovedCount++
    } 
    if(alumnos.T2 == true){
       aprovedCount++ 
    }
    if(alumnos.T3 == true){
        aprovedCount++
    }

    if (aprovedCount >=2){
        alumnos.isAproved = true
        } else{
            alumnos.isAproved = false
        }
    }
     
    console.log(alumns)



   /* if( alumnos.T1 == true;
        alumnos.T2 == true;
        alumnos.T3 == true){
        aprovedCount += 1;    
        }

    if ( aprovedCount >= 2){
        alumnos.isAproved = true;
        }else{
            alumnos.isAproved = false
        }
    
    }*/

