
const apiPedidos = 'http://localhost:3000/orders'
const apiProductos = 'http://localhost:3000/products/'

fetch(apiPedidos)
.then((response)=>{
    return response.json()
})
.then((myJson)=>{
    console.log(myJson)
})


fetch(apiProductos)
.then((response)=>{
    return response.json()
})
.then((myJson)=>{
    console.log(myJson)
})
