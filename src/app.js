// Módulos
const express = require('express');
const app = express();
const mainRouter = require ('./routes/mainRouter');//referencia al archivo mainRuter


app.set ('view engine', 'ejs');/*setear el engine a usar para en las vistas */
//app.set ('views', 'src/views');/*seteamos la ruta de views (por defecto esta en views, pero ahora esta en src/views)*/

// Ruta estatica

const path = require ('path');
const publicPath = path.resolve (__dirname, '../public');
app.use (express.static(publicPath));

// Rutas dinamicas
app.use('/', mainRouter);//referencia al archivo mainRoutes (donde estan seteadas las rutas)

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})
