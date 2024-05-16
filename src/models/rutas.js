const { mongoose } = require("mongoose")

const mongoose = require('mongoose');

const rutaSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Por favor, ingrese su nombre"]
        },

        edad: {
            type: Number,
            required: [true, "Por favor, ingrese su edad"],
            default: 0
        }

    }
);

const ruta = mongoose.model("ruta", rutaSchema);

module.exports = ruta;