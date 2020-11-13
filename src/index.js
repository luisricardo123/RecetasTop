const express = require('express') //Detecta el contenido del archivo index de la carpeta 'express'
const app = express(); //Llama al metodo llamado express
const path = require('path'); //Para las rutas porque he creado una carpeta 'src' y express no lo sabe
const routes = require('./routes') //Detecta el contenido del archivo index de la carpeta 'routes'

//settings
app.set('port',3000);
app.set('views',path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

//middlewares
/*app.use((req,res,next) => { //Da el tiempo en cualquier solicitud
console.log('Time:',Date.now().)
next(); //Si no hay respuesta ni solicitud entonces es necesario un next() para q salga del middleware
})*/

app.use('/contacto',(req,res,next) => { //Da el tiempo en cualquier solicitud en /contacto
console.log('Time:',Date.now())
next(); //Si no hay respuesta ni solicitud entonces es necesario un next() para q salga del middleware
})

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname,"public")));

//server
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'))
})