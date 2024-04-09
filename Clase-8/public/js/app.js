const validationInputs = () => {
    console.log('Rellene todos los campos')
    const messageAlert1 = document.getElementById('messageAlert1')
        messageAlert1.style.display = 'inline-block'

        messageAlert1.textContent = 'Rellene todos los campos.'
        messageAlert1.style.color = 'red'
        messageAlert1.style.padding = '10px'
}

const validationInputs2 = () => {
    console.log('Las longitudes de una matriz no pueden ser menores a 1')

    const messageAlert2 = document.getElementById('messageAlert2');
    messageAlert2.textContent = 'Las longitudes de una matriz no pueden ser menores a 1.';
    messageAlert2.style.color = 'red';
    messageAlert2.style.padding = '10px';
}

const validationInputs3 = () => {
    const messageAlert3 = document.getElementById('messageAlert3');

    messageAlert3.textContent = 'La cantidad de filas de la primera matriz, debe ser igual a la cantidad de columnas de la segunda matriz.'
    messageAlert3.style.color = 'red';
    messageAlert3.style.padding = '10px'
}

const ElButton = document.getElementById('sumElements');
const ElButton2 = document.getElementById('multElements');

ElButton.addEventListener('click', () => {
    
    let val_f_m_1 = document.getElementById('row-m-1').value
    let val_c_m_1 = document.getElementById('col-m-1').value
    let val_f_m_2 = document.getElementById('row-m-2').value
    let val_c_m_2 = document.getElementById('col-m-2').value

    if(val_f_m_1 == '' || val_c_m_1 == ''){
        return validationInputs();
    }

    if(val_f_m_2 == '' || val_c_m_2 == ''){   
        return validationInputs();
    }

    if(val_f_m_1 < 1 || val_f_m_2 < 1){
        return validationInputs2();
    }

    if(val_c_m_1 < 1 || val_c_m_2 < 1){
        return validationInputs2();
    }

    if(val_f_m_1 != val_c_m_2){
        return validationInputs3();
}else{
        

        let long_m_1 = document.getElementById('long_m_1');
        let long_m_2 = document.getElementById('long_m_2');

        const matriz_1 = document.getElementById('matriz-1');
        const matriz_2 = document.getElementById('matriz-2')
        const table = document.createElement('table');
        const table2 = document.createElement('table');
        
        long_m_1.style.display = 'none'
        long_m_2.style.display = 'none'
        ElButton.style.display = 'none'
        ElButton2.style.display = 'inline-block'
        
        const title1 = document.createElement('h3')
        const title2 = document.createElement('h3')
        matriz_1.appendChild(title1)
        matriz_2.appendChild(title2)


        for(x = 0; x < val_f_m_1; x++){
            const fila = document.createElement('tr');
            
            for(y = 0; y < val_c_m_1; y++){
                const columna = document.createElement('td')
                const nuevoInput = document.createElement('input')

                nuevoInput.type = 'number'
                columna.appendChild(nuevoInput)
                fila.appendChild(columna)
            }
            table.appendChild(fila)
        }

        matriz_1.appendChild(table)
        matriz_1.style.border = '2px solid #000';
        matriz_1.style.padding = '10px';
        matriz_1.style.margin = '5px';
        matriz_1.style.display = 'inline-block';
        title1.textContent = 'Matriz 1'
        
        long_m_1 = val_f_m_1 * val_c_m_1;
        long_m_2 = val_f_m_2 * val_c_m_2;
        console.log("La longitud de la matriz 1 es de: ", long_m_1)
        console.log("La longitud de la matriz 2 es de: ", long_m_2)


        for(x = 0; x < val_f_m_2; x++){
            const fila = document.createElement('tr');

            for(y = 0; y < val_c_m_2; y++){
                const columna = document.createElement('td');
                const nuevoInput2 = document.createElement('input');

                nuevoInput2.type = 'number'
                columna.appendChild(nuevoInput2)
                fila.appendChild(columna)
            }
            table2.appendChild(fila)
        }

        matriz_2.appendChild(table2);
        matriz_2.style.border = '2px solid #000';
        matriz_2.style.padding = '10px';
        matriz_2.style.margin = '5px';
        matriz_2.style.display = 'inline-block';
        title2.textContent = 'Matriz 2'

        messageAlert1.style.display = 'none';   
        messageAlert2.style.display = 'none';   
        messageAlert3.style.display = 'none';   
    }
})

ElButton2.addEventListener('click', () => {    
    const inputsMatriz1 = document.querySelectorAll('#matriz-1 input[type="number"]');
    const inputsMatriz2 = document.querySelectorAll('#matriz-2 input[type="number"]');
    
    let val_f_m_1 = document.getElementById('row-m-1').value;
    let val_c_m_1 = document.getElementById('col-m-1').value;
    let val_c_m_2 = document.getElementById('col-m-2').value;
    
     for (const input of inputsMatriz1) {
        if (input.value === '') {
            console.log("Rellene todos los campos de la matriz 1");
            return validationInputs(); 
        }
    }
        
    for (const input of inputsMatriz2) {
        if (input.value === '') {
            console.log("Rellene todos los campos de la matriz 2");
            return validationInputs(); 
        }
    }

    const valoresMatriz1 = [];
    inputsMatriz1.forEach(input => {
        valoresMatriz1.push(parseInt(input.value))
    })
    
    const valoresMatriz2 = [];
    inputsMatriz2.forEach(input => {
        valoresMatriz2.push(parseInt(input.value))
    })
    
    console.log('Los valores de la matriz 1 son: ', valoresMatriz1)
    console.log('Los valores de la matriz 2 son: ', valoresMatriz2)
    console.log('Cantidad de valores de la fila de la matriz 1 son :', val_f_m_1)
    console.log('Cantidad de valores de la columna de la matriz 2 son: ', val_c_m_2)
    
            let resultados = [];
            for (let i = 0; i < val_f_m_1; i++) {
                const resultadosFila = [];

                for (let j = 0; j < val_c_m_2; j++) {
                    let suma = 0;
                    for (let k = 0; k < val_c_m_1; k++) {
                        suma += valoresMatriz1[i * val_c_m_1 + k] * valoresMatriz2[k * val_c_m_2 + j];
                    }
                    resultadosFila.push(suma);
                }
                resultados.push(resultadosFila);
            }

            const matriz_1 = document.getElementById('matriz-1')
            const matriz_2 = document.getElementById('matriz-2')
           
            matriz_1.style.display = 'none'
            matriz_2.style.display = 'none'
            
            console.log('Resultado de la multiplicación de las matrices: ', resultados)
    
            const matriz_3 = document.getElementById('matriz-3');
            const title3 = document.createElement('h3');
            
            title3.textContent = 'Matriz 3';
            matriz_3.appendChild(title3);
            matriz_3.style.border = '2px solid #000';
            matriz_3.style.display = 'inline-block'
            matriz_3.style.margin = '10px'
            matriz_3.style.padding = '20px'
            
            for(let x = 0; x < val_f_m_1; x++){
                const fila = document.createElement('div');

                fila.style.display = 'flex';
                fila.style.flexDirection = 'row';
                
                for(let y = 0; y < val_c_m_2; y++) {
                    const columna = document.createElement('div')

                    columna.textContent = resultados[x][y]
                    columna.style.border = '1px solid #000'
                    columna.style.padding = '10px';
                    columna.style.margin = '5px';
                    fila.appendChild(columna)
                }
                matriz_3.appendChild(fila)
            }  
})     