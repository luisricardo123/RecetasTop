const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    //"res.sendFile(__dirname)"
    //res.sendFile(path.join(__dirname, '../views/index.html'))
    res.render('index.html', {
        titulo_pagina: 'Inicio',
        titulo_body : 'RecetasTop'
    })
})

router.get('/contacto',(req,res) => {
    res.render('contacto.html',{
        titulo_pagina: 'Contáctanos',
        titulo_body: 'Contacto'
    })
})

router.get('/noticias',(req,res) => {
    res.render('noticias.html',{
        titulo_pagina: 'Noticias',
        titulo_body: 'Noticias'
    })
})

router.get('/album',(req,res) => {
    res.render('album.html',{
        titulo_pagina: 'Álbum',
        titulo_body: 'Álbum'
    })
})
module.exports = router;

