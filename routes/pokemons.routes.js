const { Router } = require('express');
const { findPokemons, findPokemon, createPokemon, updatePokemon, deletePokemon } = require("../controllers/pokemon.controller");
const { validExistPokemon } = require('../middlewares/pokemon.middleware');

const router = Router()

router.get('/', findPokemons)

router.get('/:id', validExistPokemon, findPokemon)

router.post('/', createPokemon)

router.patch('/:id', validExistPokemon, updatePokemon)

router.delete('/:id', validExistPokemon, deletePokemon)


module.exports ={
    pokemonRouter: router
}