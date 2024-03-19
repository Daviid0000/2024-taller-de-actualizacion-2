let array1 = [];
let array2 = [];

const ElButton = document.getElementById('sumElements')

ElButton.addEventListener('click', () => {

    // const raw_1 = document.getElementById('raw-1').value
    // const col_1 = document.getElementById('col-1').value
    // const raw_2 = document.getElementById('raw-2').value
    // const col_2 = document.getElementById('col-2').value
    
    // console.log(parseInt(raw_1) + parseInt(col_1))
    // console.log(parseInt(raw_2) + parseInt(col_2))
    let raw_1 = document.getElementById('raw-1').value
    let raw_2 = document.getElementById('raw-2').value

    // let array2 = document.getElementById('col-1').value

    if(raw_1 == '' || raw_2 == ''){
        console.log('Rellene todos los campos')
    }else{
        const long1 = array1.push(parseInt(raw_1), parseInt(raw_2))
        console.log('Valores del primer array: ', array1)
        console.log('La longitud del primer array es de: ',long1)
        // console.log('Valores del segundo array: ', array2)

    }

    


    
})