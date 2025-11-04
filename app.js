const mysql = require("mysql2");

//creation de la connexion a la base de donne
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password : '',
  database: 'solucie_db',
});

// Tentative de connexion
connection.connect((err) => {
  if (err) {
    console.error('❌ Erreur de connexion à la base de données :', err.message);
    return;
  }
  console.log('✅ Connexion MySQL réussie à la base :', connection.config.database);
});