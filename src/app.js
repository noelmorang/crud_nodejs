//requerir express, llamando el modulo express
const express=require('express');
const path = require("path");
const morgan=require('morgan');

const app=express();

//settings
app.set('port', process.env.PORT || 3000);//configuracion del puerto del servidor
app.set('view engine','ejs');//configuracion del motor de plantilla, express sabe que el motor a utilizar es ejs
//Indicar donde se encuentran nuestras vistas
app.set('views', path.join(__dirname, 'views'));

//middlewares(ejecutar funciones antes de llamar las peticiones, gestionar lo que va)
app.use(morgan('dev'));

//routes(peticiones http)



//inicializando el archivo app
app.listen(3000/*puerto*/,()=>{
    console.log("Este es el puerto del servidor: 3000");
});