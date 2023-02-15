const Pokemon = require("../models/pokemon.model");

exports.validExistPokemon = async (req, res, next) => {
    try {
        const { id } = req.params;
        const pokemon = await Pokemon.findOne({
            attributes: ['id', 'name', 'image'],
            where: {
                id,
                status: 'available'
            },
        })

        if (!pokemon) {
            return res.status(404).json({
                status: 'error',
                message: 'resource not found'
            })
        }
        
        req.pokemon = pokemon;
        next();
    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'something went very wrong'
        })
    }
}