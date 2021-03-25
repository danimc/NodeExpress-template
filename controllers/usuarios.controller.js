const { response } = require('express');

const usuariosGet = (req, res) => {

    const query = req.query;

    res.json({
        msg: "Get API - Controlador",
        query
    });
};

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.status(201).json({
        msg: "Post API",
        nombre,
        edad
    });
};

const usuariosPut = (req, res) => {

    const id = req.params.id;

    res.json({
        msg: "Put API - controller",
        id
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        msg: "Delete API"
    });
};


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}