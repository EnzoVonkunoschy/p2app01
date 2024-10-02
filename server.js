/*---- Para empezar un proyecto desde cero ----
npm init  
npm install express

Luego creamos el archivo server.js
lanzamos el servidor con node server.js

matamos el servidor con Ctrl + c
¡ al modificar server debemos matar el servidor
y volverlo a lanzar !
*/

/* ---- Para lanzar un proyecto descargado de un repositorio -----
npm install
*/

const express = require('express')

const app = express()

app.get('/', (req,res)=>{
    res.send('<p>Hola desde puerto 3000</p>')
})


app.listen('3000',()=>{console.log("Escuchando en le puerto 3000")})