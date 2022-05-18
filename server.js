const express = require('express');  //importamos la dependencia
let app = express(); //declaramos una App de Express
let port = process.env.PORT || 3000; //setteamos el puerto para que escuche el servidor
app.use('/assets', express.static(__dirname +  '/public'));

app.set('view engine', 'ejs');

//primera ruta (esta al nivel de la raiz /), Hello world!
app.get('/', (req, res) => {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World!</h1></body></html>');
});


//terecera ruta, recibe un parametro
app.get('/person/:id',(req, res) =>{
   res.render('person' ,{ID: req.params.id, Qstr: req.query.qrst});
});

app.listen(port); //levantar el server y ponerle a la escucha