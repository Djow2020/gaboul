const functions = require('firebase-functions');
const app = require('./server'); // Assurez-vous que le chemin vers votre fichier serveur est correct

exports.api = functions.https.onRequest(app);
