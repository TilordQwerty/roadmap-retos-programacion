// Pila/Stack (LIFO)

let stack = []
stack.push('1')
stack.push('2')
stack.push('3')
console.log(stack)

let stackItem = stack.length
console.log(stackItem)
stack.pop()
console.log(stack)

// Cola/queue (FIFO)

let queue = []
queue.push('1')
queue.push('2')
queue.push('3')
console.log(queue)

console.log(queue[0])
queue.shift(0)
console.log(queue)

console.log(queue[0])
queue.shift(1)
console.log(queue)

// Simulación de navegador web (opcional)

const readline = require('readline');

function navegadorWeb(){
    let pagina = []
    let currentPageIndex = -1 // keep track of the current page index

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt("Agrega una url o interactua con las palabras adelante/atras/salir: ");
    rl.prompt();

    rl.on('line', (line) => {
        if (line.trim() == "salir"){
            console.log("Saliendo del navegador")
            rl.close()
        } else if(line.trim() == "adelante") {
            // implement adelante logic here
            if(currentPageIndex < pagina.length - 1){
                currentPageIndex+=
                console.log(`Has navegado a la web: ${pagina[currentPageIndex]}`)
            } else {
                console.log("No hay más páginas adelante")
            }
        } else if(line.trim() == "atras") {
            // implement atras logic here
            if(currentPageIndex > 0){
                currentPageIndex--
                console.log(`Has navegado a la web: ${pagina[currentPageIndex]}`)
            } else {
                console.log("Estás en la página de inicio")
            }
        } else {
            pagina.push(line.trim())
            currentPageIndex++
            console.log(`Has agregado la web: ${pagina[currentPageIndex]}`)   
        }
        rl.prompt();
    }).on('close', () => {
        process.exit(0);
    });
}

navegadorWeb()

// Simulación de impresora compartida (opcional)

function impresoraCompartida(){
    let cola = []

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.setPrompt("Agrega una documento o selecciona imprimir/salir: ");
    rl.prompt();

    rl.on('line', (line) => {
        if(line.trim() == "salir"){
            console.log("Saliendo de la impresora compartida")
            rl.close()
        } else if(line.trim() == "imprimir") {
            console.log(`Cola de impresion: ${cola}`)
            cola.shift()
            if(cola.length >= 0){
                console.log(`Imprimiendo: ${cola[0]}`)
                } else {
                    console.log("No hay documentos en la cola")
            }
        } else {
            cola.push(line.trim())
            console.log(`Documento agregado a la cola: ${cola.length - 1}`)
        }
        rl.prompt();
    }).on('close', () => {
        process.exit(0);
    })
}

impresoraCompartida()
