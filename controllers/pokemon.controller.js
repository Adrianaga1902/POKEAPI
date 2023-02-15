const Pokemon = require("../models/pokemon.model");

exports.findPokemons = async (req, res) => {
    try {

        const { count, rows } = await Pokemon.findAndCountAll({
            attributes: ['id', 'name', 'image'],
            where: {
                status: 'available'
            }
        })
        res.status(200).json({
            status: 'succesud',
            count,
            results: rows,
        })
    } catch (error) {

        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
};

exports.findPokemon = async (req, res) => {
    try {
        const { pokemon } = req;

        res.status(200).json({
            status: 'success',
            pokemon,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}

exports.createPokemon = async (req, res) => {
    try {
        const { name, image } = req.body;

        const pokemon = await Pokemon.create({

            name: name.toLowerCase(),
            image,

        })


        res.status(200).json({
            status: 'succesud',
            message: 'Pokemon created succesfull',
            pokemon,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        });
    }
}
exports.updatePokemon = async (req, res) => {
    try {

        const { pokemon } = req;
        const { name, image } = req.body;
        
        await pokemon.update({ name, image })

        res.status(200).json({
            status: 'succesud',
            message: 'Pokemon update successfully',
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
};

exports.deletePokemon = async (req, res) => {
    try {

        const { pokemon } = req;

        await pokemon.update({ status: 'disabled' })

        res.status(200).json({
            status: 'success',
            message: 'Pokemon deleted successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'fail',
            message: 'internal server error'
        })
    }
}

