import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const matrizController = (req, res) => {
    res.sendFile(path.join(__dirname, '..','..', 'views' ,'index.html'));
};