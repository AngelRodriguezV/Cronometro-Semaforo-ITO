// Parametros de control
var tiempoLimite;
var tiempoIntermedio;
// Variables el tiempo
var minutos = 0;
var segundos = 0;
var milisegundos = 0;
// Elementos del htmll para modificar
var bg = document.getElementById('myBody');
var btnPlay = document.getElementById('play');
var btnPause = document.getElementById('pause');
var btnStop = document.getElementById('stop');
var input1 = document.getElementById('tiempoLimite');
var input2 = document.getElementById('tiempoIntermedio');

// Variable para controlar el tiempo
var loopUpdate;

function init() {
    tiempoLimite = document.getElementById('tiempoLimite').value;
    tiempoIntermedio = document.getElementById('tiempoIntermedio').value;
    // Desabilitar y avilitar 
    btnPlay.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;
    input1.disabled = true;
    input2.disabled = true;
    // Establecer el color verde
    bg.classList.remove('bg-secondary','bg-warning','bg-success','bg-danger');
    bg.classList.add('bg-success');
    // actualizar el cronograma
    loopUpdate = setInterval(update, 10);
}

function update() {
    milisegundos++;
    if (milisegundos >= 100) {
        segundos = segundos + Math.floor(milisegundos / 100);
        milisegundos = milisegundos % 100;
    }
    if (segundos >= 60) {
        minutos = minutos + Math.floor(segundos / 60);
        segundos = segundos % 60;
    }
    var etiMinutos = document.getElementById('minutos');
    var etiSegundos = document.getElementById('segundos');
    var etiMilisegundos = document.getElementById('milisegundos');
    etiMinutos.textContent = minutos >= 10 ? minutos : ('0' + minutos);
    etiSegundos.textContent = segundos >= 10 ? segundos : ('0' + segundos);
    etiMilisegundos.textContent = milisegundos >= 10 ? milisegundos : ('0' + milisegundos);
    if (minutos == tiempoIntermedio) {
        bg.classList.remove('bg-secondary','bg-warning','bg-success','bg-danger');
        bg.classList.add('bg-warning');
    }
    if (minutos == tiempoLimite) {
        bg.classList.remove('bg-secondary','bg-warning','bg-success','bg-danger');
        bg.classList.add('bg-danger');
        clearInterval(loopUpdate); 
    }
}

function stop() {
    btnStop.disabled = true;
    btnPause.disabled = true;
    btnPlay.disabled = false;
    input1.disabled = false;
    input2.disabled = false;
    clearInterval(loopUpdate);
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
}

function pause() {
    btnPause.disabled = true;
    btnPlay.disabled = false;
    clearInterval(loopUpdate);
}
