
const treshold = 0.9;

const evaluar = document.getElementById('evaluar')

evaluar.addEventListener('click', () => {

    const text = document.getElementById('text').value
    
    toxicity.load(treshold).then(model => {
        const sentences = [text];
        
        model.classify(sentences).then(predictions => {
            
            console.log(JSON.stringify(predictions, null, 2))
            console.log('type message:', text)
            
            const results = document.getElementById('results')
            const message = document.getElementById('message')


            predictions.forEach(element => {
                const elDiv = document.createElement('div')

                console.log("probabilidades:",element.results.probabilities)
                // if(element.results.probabilities < 0.9){
                //     elDiv.style.backgroundColor = 'green'
                // }

                elDiv.textContent = element.label;
                elDiv.style.padding = '10px';
                elDiv.style.margin = '10px';
                elDiv.style.border = '1px solid #000';
                
                results.appendChild(elDiv)
                
                message.textContent = 'El mensaaje es:', text;
                console.log("este es el resultado:",element)
                document.getElementById('text').value = ''
            });
        })
    })
})

