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
    let col_1 = document.getElementById('col-1').value
    let col_2 = document.getElementById('col-2').value

    // let array2 = document.getElementById('col-1').value

    if((raw_1 == '' || raw_2 == '')&& (col_1 == '' || col_2 == '')){
        console.log('Rellene todos los campos')
    }else{
        array1.push(parseInt(raw_1), parseInt(raw_2))
        array2.push(parseInt(col_1), parseInt(col_2))

        // for (let sumArray = []; ((array1 != '' || undefined)&(array2 != '' || undefined)) & (length.sumArray < 5); [...sumArray, array1, array2]) {
        //     // const element = array[valorActual];
        //     console.log(sumArray)
            
        // }
        // const sumArreglo = (elemento, indice, array1) => {
        //     elemento 
        // }
        // while(sumArray.length < 1) {
        // let longSumArray = sumArray.push(array1, array2)
        // console.log('Longitud del nuevo array: ',longSumArray)
        // console.log('Suma total de ambos arrays: ', sumArray)
        // }

        if(array1.length === array2.length){
            let sumArray = [];
            for (let i = 0; i < array1.length; i++) {
                sumArray.push(array1[i] + array2[i])
            }
            console.log('resultado de la suma: ', sumArray)
        } else {
            console.log('Los arrays no tienen la misma longitud')
        }





        console.log('Valores del primer array: ', array1)
        console.log('Valores del segundo array: ', array2)
        // console.log('La longitud del primer array es de: ',long1)
        // console.log('Valores del segundo array: ', array2)

    }

    


    
})