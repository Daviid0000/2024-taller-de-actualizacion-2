import express from 'express';
import matrizRouter from './src/router/matriz.routes.js';
import path from 'path'
import { fileURLToPath } from 'url';

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use('/matriz', matrizRouter)
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));



app.listen(3000, () => {
    console.log("Server in listening on port: http://localhost:3000")
} )