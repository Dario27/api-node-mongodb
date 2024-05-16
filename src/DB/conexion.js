const { MongoClient } = require('mongodb');

// URL de conexión a la base de datos
const url = 'mongodb+srv://admin:Sistema1234@tareadb.c1nkjg8.mongodb.net/Node-API?retryWrites=true&w=majority&appName=TareaDB';

// Nombre de la base de datos
const dbName = 'tarea';

// Crear un nuevo cliente de MongoDB
const client = new MongoClient(url, {
   dbName: dbName, 
   useNewUrlParser: true,
   useUnifiedTopology: true });

// Función para conectar a la base de datos
module.exports.conectar = async ()=> {
  try {
    // Conectar al servidor de MongoDB
    await client.connect();
    console.log('Conectado exitosamente al servidor de MongoDB');
    return true
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    return false
  } 
}
