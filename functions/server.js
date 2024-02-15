const express = require('express');
const app = express();
app.use(express.json()); 
app.post('/notification', (req, res) => {
    const rendezvous = req.body.rendezvous;
    // Traitez les données de rendez-vous ici
    // Ensuite, envoyez une réponse à l'extension
    res.status(200).send('Notification reçue');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Serveur démarré sur le port ${port}`));
