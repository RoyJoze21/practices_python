const mysql = require('mysql');
require('dotenv').config();

console.log(process.env.USER)
// Configuración de la conexión
const connection = mysql.createConnection({
  host: process.env.HOST, // IP del servidor de cPanel
  user: process.env.USER, // Tu nombre de usuario de MySQL
  password: process.env.PASSWORD, // Tu contraseña de MySQL
  database:  process.env.DATABASE // Nombre de la base de datos
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a la base de datos establecida.');
});

// Realizar una consulta
connection.query('SELECT * FROM usuarios', (err, results) => {
  if (err) {
    console.error('Error al realizar la consulta:', err);
    return;
  }
  console.log('Resultados de la consulta:', results);
});



// connection.query(`insert into usuarios values(null, 'Maria', 99, 'Colombia')`, (err, data)=>{

//     if(err){
//       console.log('Error al insertar la consulta:', err)

//     }
//     else{ console.log('Resultado',data)}
// })
// Cerrar la conexión
// connection.end((err) => {
//   if (err) {
//     console.error('Error al cerrar la conexión:', err);
//     return;
//   }
//   console.log('Conexión cerrada.');
// });
