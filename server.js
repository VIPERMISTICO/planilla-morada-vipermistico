const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Esto le dice a Express que sirva CUALQUIER imagen o archivo que encuentre en tu proyecto
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'public')));

// Esto obliga al servidor a mandar el index.html cuando alguien abra tu link principal
app.get('/', (req, res) => {
    // Busca el index.html ya sea afuera o dentro de la carpeta public
    res.sendFile(path.join(__dirname, 'index.html'), (err) => {
        if (err) {
            res.sendFile(path.join(__dirname, 'public', 'index.html'));
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor de planilla-morada corriendo en puerto ${PORT}`);
});
