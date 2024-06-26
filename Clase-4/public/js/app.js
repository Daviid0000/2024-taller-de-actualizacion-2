let array1 = [];
let array2 = [];

const validationInputs = () => {
        console.log('Rellene todos los campos')
        const message = document.getElementById('message')

        message.textContent = 'Rellene todos los campos.'
        message.style.color = 'red'
        message.style.padding = '10px'
}

const ElButton = document.getElementById('sumElements')

ElButton.addEventListener('click', () => {
    
    let raw_1 = document.getElementById('raw-1').value
    let raw_2 = document.getElementById('raw-2').value
    let col_1 = document.getElementById('col-1').value
    let col_2 = document.getElementById('col-2').value

    if(raw_1 == '' || raw_2 == ''){
        return validationInputs()
    }

    if(col_1 == '' || col_2 == ''){   
        return validationInputs()
}else{
        document.getElementById('raw-1').value = '';
        document.getElementById('raw-2').value = '';
        document.getElementById('col-1').value = '';
        document.getElementById('col-2').value = '';
        
        array1.push(parseInt(raw_1), parseInt(raw_2))
        array2.push(parseInt(col_1), parseInt(col_2))
        
        console.log('Valores del primer array: ', array1)
        console.log('Valores del segundo array: ', array2)
        
        if(array1.length === array2.length){
            let sumArray = [];
            for (let i = 0; i < array1.length; i++) {
                sumArray.push(array1[i] + array2[i])
            }
        
        let matriz_3 = document.getElementById('matriz-3');
        
        const title = document.createElement('h3');
            
            message.style.display = 'none';
            
            matriz_3.innerHTML = ''      
              
            matriz_3.appendChild(title);
            matriz_3.style.border = '2px solid #000'
            matriz_3.style.padding = '10px'
            matriz_3.style.margin = '10px'
            matriz_3.style.display = 'inline-block'
            
            title.textContent = 'Matriz 3';

        sumArray.forEach(element => {
            const elDiv = document.createElement('div');
            elDiv.textContent = element;
            elDiv.style.border = '2px solid #11f'
            elDiv.style.padding = '5px'
            elDiv.style.display = 'inline'
            elDiv.style.margin = '10px'
            matriz_3.appendChild(elDiv);
        })

            console.log('resultado de la suma: ', sumArray)

        } else {
            console.log('Los arrays no tienen la misma longitud')
            alert('Los arrays no tienen la misma longitud')
        }


    }

    
})