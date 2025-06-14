const clock = document.querySelector("p")
let timer
let number = 0

function start() {
    timer = setInterval(() => {
        number++
        clock.innerHTML = formatarTempo(number)
    }, 1000);
}

function pause() {
    clearInterval(timer)
}

function restart() {
    pause()
    clock.innerHTML = "00:00:00"
    number = 0
}

function formatarTempo(segundos) {
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segs = segundos % 60;
    
    horas = horas.toString().padStart(2, '0');
    minutos = minutos.toString().padStart(2, '0');
    segs = segs.toString().padStart(2, '0');

    return `${horas}:${minutos}:${segs}`;
}
