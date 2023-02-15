const express = require("express");
const cors = require("cors")
const { db } = require("../database/db");
const { pokemonRouter } = require("../routes/pokemons.routes");
class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;

        //path routes
        this.paths = {
            pokemons: '/api/v1/pokemons',
        };
        // connect to
        this.database();
        // middlewares
        this.middlewares();
        //routes
        this.routes();


    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.pokemons, pokemonRouter)
    }

    database() {
        db.authenticate()
            .then(() => console.log('Database authenticated'))
            .catch(err => console.log(err))

        db.sync()
            .then(() => console.log('Database Synced'))
            .catch(err => console.log(err))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('server running on port', this.port)
        })
    }
}

module.exports = Server;