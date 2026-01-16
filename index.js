import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// 🔥 HEALTH CHECK - DEBE IR PRIMERO, antes de otras configuraciones
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Conectar bd
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error))

const port = process.env.PORT || 4000;

// DEBUG - Temporal para verificar el puerto
console.log('🔍 PORT desde variable de entorno:', process.env.PORT);
console.log('🔍 Puerto final que se usará:', port);

// Agregar PUG
app.set('view engine', 'pug');

// Obtener año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear()
    res.locals.nombreSitio = 'Agencia de Viajes';
    return next();
});

// Agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended: true}));

// Definir carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router)

app.listen(port, '0.0.0.0', () => {
    console.log(`✅ El servidor está funcionando en el puerto ${port}`)
    console.log(`✅ Escuchando en 0.0.0.0:${port}`)
})