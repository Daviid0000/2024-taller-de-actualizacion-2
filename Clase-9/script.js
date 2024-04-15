// // Importar librería TensorFlow.js

// // Definir variables para el modelo
// let model;

// // Definir función para entrenar el modelo
// function entrenarModelo() {
//     // Crear el modelo secuencial
//     model = tf.sequential();

//     // Agregar capa densa con 1 neurona
//     model.add(tf.layers.dense({ units: 1, activation: 'linear' }));

//     // Compilar el modelo
//     model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

//     // Preparar datos de entrenamiento
//     const xs = tf.tensor2d([-6, -5, -4, -3, -2, -1, 0, 1, 2], [9, 1]);
//     const ys = tf.tensor2d([-12, -10, -8, -6, -4, -2, 0, 2, 4], [9, 1]);

//     // Entrenar el modelo
//     model.fit(xs, ys, { epochs: 250 }).then(() => {
//         document.getElementById('mensajeEntrenamiento').textContent = '¡Modelo entrenado con éxito!';
//     });
// }

// // Definir función para predecir el valor de Y
// function predecirY(valorX) {
//     // Convertir el valor de X a tensor
//     const x = tf.tensor2d([valorX], [1, 1]);

//     // Predecir el valor de Y
//     const y = model.predict(x);

//     // Mostrar el resultado de la predicción
//     document.getElementById('resultadoPrediccion').textContent = `Valor de Y: ${y.dataSync()[0]}`;
// }

// // Agregar eventos a los botones
// document.getElementById('btnEntrenar').addEventListener('click', entrenarModelo);
// document.getElementById('btnPredecir').addEventListener('click', () => {
//     const valorX = parseFloat(document.getElementById('valorX').value);
//     predecirY(valorX);
// });
