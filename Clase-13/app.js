
const treshold = 0.9;

const evaluar = document.getElementById('evaluar')

evaluar.addEventListener('click', () => {

    const elText = document.getElementById('text').value
    const elMessage = document.getElementById('message')
    const results = document.getElementById('results')
    results.innerHTML = ''
    document.getElementById('text').value = ''

    elMessage.style.fontFamily = 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';
    elMessage.style.margin = '10px'
    elMessage.textContent = `El mensaje es:  ${elText}`;
    
    toxicity.load(treshold)
    .then(model => { const sentences = [elText];
     model.classify(sentences)
    .then(predictions => {
            
            console.log(JSON.stringify(predictions, null, 2))
            
            const elResults = document.getElementById('results')

            predictions.forEach(element => {
                const elDiv = document.createElement('div')
                const elColor = document.createElement('div');

                const primerResultado = element.results[0];
                console.log("Resultados de la predicción: ",primerResultado)
                
                const probabilidades = primerResultado.probabilities;
                console.log("Pobabilidades: ", probabilidades)

                let maxcolor = probabilidades[0] * 100
                maxcolor = parseInt(maxcolor)
                
                elColor.style.maxWidth = `${maxcolor}%`;
                elColor.style.backgroundColor = '#f00';
                elColor.style.color = '#fff'
                elColor.style.padding = '5px';
                elColor.textContent = `${element.label}:  ${maxcolor}%`;
                elColor.style.fontFamily = 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';
                
                elDiv.appendChild(elColor);

                elDiv.style.padding = '2px';
                elDiv.style.margin = '10px';
                elDiv.style.border = '1px solid #000';
                elDiv.style.backgroundColor = '#1116'
                
                elResults.appendChild(elDiv)
                
            });
        })
    })
})

