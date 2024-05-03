const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.post('/sumar_matrices', (req, res) => {

  const { matrix1, matrix2 } = req.body;

  if(matrix1 === matrix2 && matrix1[0] === matrix2[0]) {
    const rows = matrix1.length;
    const cols = matrix1[0].length;

  
    let resultMatrix = new Array(rows);
    for (let i = 0; i < rows; i++) {
      resultMatrix[i] = new Array(cols);
      for (let j = 0; j < cols; j++) {
        resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
      }
    }
    res.send(resultMatrix);
    
  } else {
    res.status(400).send('Las matrices deben tener la misma dimensión');
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});



app.listen(5000, () => {
  console.log('Servidor escuchando en el puerto 5000');
});

