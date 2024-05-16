const mongoose = require('mongoose');

// esquema para la ubicación
const LocationSchema = new mongoose.Schema({
  direccion: String,
  ciudad: String,
  pais: String
});

// esquema para el perfil
const ProfileSchema = new mongoose.Schema({
  network: String,
  username: String
});

// esquema para la educación
const EducationSchema = new mongoose.Schema({
  institucion: String,
  url: String,
  area: String,
  tipo: String,
  inicio: Date,
  puntaje: String,
  cursos: [String]
});

// squema principal
const UserSchema = new mongoose.Schema({
  id: String,
  basics: {
    nombre: String,
    edad: String,
    ciudad: String,
    titulo: String,
    email: String,
    telefono: String,
    summary: String,
    location: LocationSchema,
    perfil: ProfileSchema
  },
  trabajo: {
    nombre: String,
    direccion: String,
    descripcion: String,
    posicion: String,
    inicio: Date
  },
  educacion: [EducationSchema]
});

// Compilar el modelo a partir del esquema
const Cv = (mongoose.models.Cv || mongoose.model<UserSchema>("Cv",UserSchema,"Cv"))
module.exports = Cv;

