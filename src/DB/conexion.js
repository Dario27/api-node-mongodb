const mongoose = require('mongoose');

// URL de conexión a la base de datos
const url = 'mongodb+srv://admin:Sistema1234@tareadb.c1nkjg8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TareaDB';

// Nombre de la base de datos
const dbName = 'tarea';

// Función para conectar a la base de datos
module.exports.conectar = async ()=> {
  try {

    mongoose.connect(url, {dbName:dbName, useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
    db.once('open', () => {
      console.log('Conectado exitosamente al servidor de MongoDB');
    });
    return true
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    return false
  } 
}
