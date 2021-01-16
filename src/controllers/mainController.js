// Datos 
dishes = [{
    id: 1,
    name: 'Carpaccio fresco',
    description: 'Entrada Carpaccio de salmón con cítricos',
    price: 'U$S 65.50'
    },
    {
    id: 2,
    name: 'Risotto de berenjena',
    description: 'Risotto de berenjena y queso de cabra',
    price: 'U$S 47.00'
    },
    {
    id: 3,
    name: 'Mousse de arroz',
    description: 'Mousse de arroz con leche y aroma de azahar',
    price: 'U$S 27.50'
    },
    {
    id: 4,
    name: 'Espárragos blancos',
    description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico', 
    price: 'U$S 37.50'
    }
];  

// Objeto literar con lo que va a devolver cada pagina solicitada, devuelve una callback con metodo res.render
// La pagina y datos para que se arme la pagina solicitada
const pages = {
    index: (req, res) => {res.render('index', {dishes})},
    
    detalleMenu: (req, res) => {
        let id= req.params.id;//obtenemos el id del producto a mostrar
        //creamos el objeto basico.
        let dishedSelected;
        //se recorre los datos para ver si hay coincidencia, si hay sobre escribe el objeto, si no queda como esta el objeto
        dishes.forEach(element => {
            if(id == element.id){
                dishedSelected = {
                    id:             element.id,
                    name:           element.name,
                    description:    element.description,
                    price:          element.price 
                };               
            }
        }); 
        //Verificamos si encotro el id que buscaba, si no retorna que no fue encontrado
        if(dishedSelected == null){
            dishedSelected = {
                id:             id,
                name:           'producto no encontrado',
                description:    'sin descripcion',
                price:          '0' 
            };
        }
        //res.send({dishedSelected});
        res.render('detalleMenu', {dishedSelected});
    },
    error: (req,res)=>{ res.send('ERROR 404')}
}

// Acá exportamos el resultado
module.exports = pages;