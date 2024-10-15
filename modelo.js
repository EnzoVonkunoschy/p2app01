const fs = require('fs')

function guardarTexto(){
    fs.writeFileSync('./miTexto.txt',"Oid mortales el grito sagrado.")
}

//guardarTexto();

function leerTexto(){
    try{
    let data = fs.readFileSync('./miTexto.txt','utf-8')
    console.log(data)
    }catch (error){
        //console.log(error.message)
        console.log("Error al leer el archivo")
    }
}
//leerTexto()

function guardarObjeto(){
    const unAfiliado = {nombre: "Enzo", edad:56, afiliado: true}
    fs.writeFileSync('./afiliado.txt',JSON.stringify(unAfiliado))
}
//guardarObjeto()

function leerObjeto(){
    const strObjeto = fs.readFileSync('./afiliado.txt','utf-8')
    console.log(strObjeto)
    const objeto = JSON.parse(strObjeto)
    console.log(objeto)
}
//leerObjeto()

function guardarColeccion(col){
    fs.writeFileSync('./coleccion.txt',JSON.stringify(col))
}
//uardarColeccion([{nombre: "Enzo", edad: 56, afiliado: true},{nombre:"Luna", edad:30, afiliado: false}])

function leerColeccion(){
    const strColeccion = fs.readFileSync('./coleccion.txt','utf-8')
    console.log(strColeccion)
    const coleccion = JSON.parse(strColeccion)
    console.log(coleccion)
}
//leerColeccion()

function agregarElemento(elem){
    let coleccion = []
    try{
        const strColeccion = fs.readFileSync('./coleccion.txt','utf-8')
        if(strColeccion){
            coleccion = JSON.parse(strColeccion)
            coleccion.push(elem)
        }         
    }catch (error){
        coleccion.push(elem)
    }
 
    fs.writeFileSync('./coleccion.txt',JSON.stringify(coleccion))
}
agregarElemento({nombre: "Pedro",edad: 34, afiliado: false})

function eliminarElemento(elem){
    //Leer la colección

    const strColeccion = fs.readFileSync('./coleccion.txt','utf-8')
    coleccion = JSON.parse(strColeccion)
    
    //Filtrar elementos distintos con .filter(...)
    coleccion  = coleccion.filter(e=> 
        e.nombre !== elem.nombre||
        e.edad !== elem.edad ||
        e.afiliado !== elem.afiliado
    )

    //Guardar la colección de elementos distintos
    fs.writeFileSync('./coleccion.txt',JSON.stringify(coleccion))
}
//eliminarElemento({nombre:"Luisa", edad:34, afiliado:false});
