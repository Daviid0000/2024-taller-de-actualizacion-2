
const treshold = 0.9;

const evaluar = document.getElementById('evaluar')

evaluar.addEventListener('click', () => {

    const text = document.getElementById('text').value
    const message = document.getElementById('message')
    document.getElementById('text').value = ''

message.textContent = `El mensaaje es:  ${text}`;
    
    toxicity.load(treshold).then(model => {
        const sentences = [text];

        
        model.classify(sentences).then(predictions => {
            
            console.log(JSON.stringify(predictions, null, 2))
            console.log('type message:', text)
            
            const results = document.getElementById('results')


            predictions.forEach(element => {
                const elDiv = document.createElement('div')

                const primerResultado = element.results[0];
                console.log("variable1: ",primerResultado)
                const probabilidades = primerResultado.probabilities;
                console.log("variablle2: ", probabilidades)

                probabilidades.forEach((item) => {
                    console.log(item)
                })
                // if (probabilidades) {
                //     if (probabilidades[0] < 0.9) {
                //         elDiv.textContent = `${element.label}: Falso`;
                //         elDiv.style.backgroundColor = '#fff';
                //         elDiv.style.color = '#000';
                //     } else {
                //         elDiv.textContent = `${element.label}: Verdadero`;
                //         elDiv.style.backgroundColor = '#f00';
                //         elDiv.style.color = '#fff';
                //     }
                // }

                elDiv.textContent = element.label;
                elDiv.style.padding = '10px';
                elDiv.style.margin = '10px';
                elDiv.style.border = '1px solid #000';
                
                results.appendChild(elDiv)
                
                console.log("este es el resultado:",element)
            });
        })
    })
})

