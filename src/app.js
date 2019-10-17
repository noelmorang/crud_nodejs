//requerir express, llamando el modulo express
const express=require('express');
const path = require("path");
const morgan=require('morgan');
const mysql=require('mysql');
const myConnection=require('express-myconnection');

const app=express();

//importando rutas
const customerRoutes=require('./routes/customer');

//settings
app.set('port', process.env.PORT || 3000);//configuracion del puerto del servidor
app.set('view engine','ejs');//configuracion del motor de plantilla, express sabe que el motor a utilizar es ejs
//Indicar donde se encuentran nuestras vistas
app.set('views', path.join(__dirname, 'views'));

//middlewares(ejecutar funciones antes de llamar las peticiones, gestionar lo que va)
app.use(morgan('dev'));//nos permitira ver las peticiones realizadas por los clientes
//Conexion a MySql
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'crudnodejs'
},'single'/**forma en la que nos conectaremos a mysql */));

//estamos descodificando la informacion que viene desde el formulario
app.use(express.urlencoded({extended:false}));


//routes(peticiones http)
app.use('/',customerRoutes);

//static files
app.use(express.static(path.join(__dirname,'public')));


//inicializando el servidor
app.listen(3000/*puerto*/,()=>{
    console.log("Este es el puerto del servidor: 3000");
});