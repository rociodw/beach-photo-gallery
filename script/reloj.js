var fecha = new Date();
const anoActual = fecha.getFullYear();
const mesActual = fecha.getMonth() + 1;
const diaActual = fecha.getDate();
var time = document.getElementById("time");
//Añadimos las variables anteriores a la siguiente URL para que los datos extraidos de la misma sean actualizados diariamente.
const URL =
    "https://api.sunrise-sunset.org/json?lat=36.52672&lng=-6.2891&date=" +
    anoActual +
    "-" +
    mesActual +
    "-" +
    diaActual;

fetch(URL)
    .then((res) => res.json())
    .then((data) => {

        //Guardamos en variables los datos que necesitamos para saber la hora diaria de la puesta de sol en la ciudad de Cádiz.
        var hora = data.results.sunset;
        var ano = fecha.getFullYear();
        var mes = fecha.getMonth() + 1;
        var dia = fecha.getDate();
        var elementosHora = hora.split(":");
        var horas = parseInt(elementosHora[0]) + 1;
        var minutos = parseInt(elementosHora[1]);
        var segundos2 = elementosHora[2];

        //Recogemos el dato de si la hora es AM o PM, aunque no sea necesario ya que el atardecer siemore será PM.        
        var sinpm = segundos2.split(" ");
        var segundos = [sinpm[0]];
        var pmam = [sinpm[1]];

        var fechaUTC = new Date(ano, mes, dia, horas, minutos, segundos);

        //De la fecha en formato UTC extraemos la hora
        var reloj = fechaUTC.toLocaleTimeString();

        var tiempo = document.getElementById("hora");
        tiempo.innerHTML = reloj + " " + pmam;
    });
