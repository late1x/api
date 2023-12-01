const { Router } = require('express');
const router = Router();
const _ = require ('underscore');


const calzado = require('../example.json');
console.log(calzado);

router.get('/', (req, res) => {
    res.send(calzado);
});

router.post('/', (req, res) => {
    const {Nombre_Calzado,Descripcion,Ranking_de_ventas,Colores_mas_vendidos} = req.body;
    if (Nombre_Calzado && Descripcion && Ranking_de_ventas && Colores_mas_vendidos){
        const id = calzado.length + 1;
        const newCalzado = {...req.body, id};
        calzado.push(newCalzado);
        res.json(calzado);
    }
    else{
        res.status(500).json({error:'Se genero un error grave. '});
    }
    res.send('recibido');
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(calzado , (calza, i) => {
        if (calza.id == id){
            calzado.splice(i, 1);
        }
    });
    res.send(calzado);
});

module.exports = router;