let crono = document.querySelector("#crono")
let tiempo


document.addEventListener('DOMContentLoaded', ()=>{
    localStorage.crono = (localStorage.crono || "0.0")
    mostrar()

    let btnStart = document.querySelector('#btnStart')
    let btnReset = document.querySelector('#btnReset')

    btnStart.addEventListener('click', start)
    btnReset.addEventListener('click', reset)
})

const start = (e)=>{
    console.log("start")
    if(!tiempo){
        startCrono()
        btnStart.innerText = "Stop"
    }else {
        stop()
    }
}

const reset = (e)=>{
    console.log("reset")
    localStorage.crono = "0.0";
    // cambiar el valor en pantalla
    mostrar()
}

const stop = (e)=>{
    console.log("stop")
    btnStart.innerText = "Start"
    //parar el tiempo
    clearInterval(tiempo)
    tiempo = undefined
}

const startCrono = (e)=>{
    console.log("Iniciar cronometro")
    tiempo = setInterval( ()=>{
        // Incrementar el varor del tiempo
        incrementar()
        // Mostrarlo en pantalla
        mostrar()
    }, 100)
}

const incrementar = ()=>{
    localStorage.crono = +localStorage.crono + 0.1
}

const mostrar = () =>{
    crono.innerHTML = (+localStorage.crono).toFixed(2)
}


