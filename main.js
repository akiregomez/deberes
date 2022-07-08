const objLineal = new Lineales();
const objAlternativo = new alternativos();
const objRepeticion = new repeticion();

//---------------------EJERCICIOS-LINEALES
//ejercicio1
function calcularSalarioTrabajador() {
  const nombreTrabajador = document.querySelector("#nombre-trabajador").value;
  const horasTrabajadas = document.querySelector("#horas-trabajadas").value;
  const valorHora = document.querySelector("#valor-hora").value;

  const showResp = document.querySelector("#respuesta");
  showResp.innerText = `${nombreTrabajador} debe recibir: $${objLineal.calcularSalario(
    horasTrabajadas,
    valorHora
  )}`;
}

//ejercicio 2
function encontrarNumero() {
  const value1 = document.querySelector("#serie1").value;
  const value2 = document.querySelector("#serie2").value;
  const value3 = document.querySelector("#serie3").value;
  const value4 = document.querySelector("#serie4").value;
  const value5 = document.querySelector("#serie5").value;
  const respValor = document.querySelector("#sextoValor");

  respValor.innerHTML = `El sexto numero es: ${objLineal.encontrarSextoValor(
    value1,
    value2,
    value3,
    value4,
    value5
  )}`;
}

//ejercicio 3
function calcularArea() {
  const baseMenor = document.querySelector("#base-menor").value;
  const baseMayor = document.querySelector("#base-mayor").value;
  const altura = document.querySelector("#altura").value;

  const respArea = document.querySelector("#resp-area-trapecio");
  respArea.innerText = `El área del trapecio es: ${objLineal.calcularAreaTrapecio(
    baseMenor,
    baseMayor,
    altura
  )} m²`;
}

//ejercicio 4
function calcularTotalTerreno() {
  const terrenoHijo2 = 125.2;
  const porcentajeHijoMenor = 27;
  const porcentajeHijoMayor = 2 * porcentajeHijoMenor; //54%
  const porcentajeHijo2 = 100 - (porcentajeHijoMenor + porcentajeHijoMayor); //19%

  const totalTerreno = ((100 * terrenoHijo2) / porcentajeHijo2).toFixed(2);

  const terrenoHijo1 = objLineal
    .calcularTerreno(porcentajeHijoMayor, totalTerreno)
    .toFixed(2);

  const terrenoHijo3 = objLineal
    .calcularTerreno(porcentajeHijoMenor, totalTerreno)
    .toFixed(2);

  const respTerreno = document.querySelector("#respuestaTerreno");
  respTerreno.innerText = `El terreno total mide: ${totalTerreno} m² 
        \nA cada hijo le corresponde: 
        \nHijo mayor (el doble del menor): ${terrenoHijo1} m²
        \nSegundo hijo: ${terrenoHijo2} m²
        \nHijo mejor (el 27% del terreno): ${terrenoHijo3} m²`;
}

//ejercicio 5
function calcularDiscriminante() {
  const valueA = document.querySelector("#inputA").value;
  const valueB = document.querySelector("#inputB").value;
  const valueC = document.querySelector("#inputC").value;

  const respDiscriminante = document.querySelector("#restDiscriminante");
  const rta = objLineal.calcularDiscriminante(valueA, valueB, valueC);

  if (rta > 0) {
    respDiscriminante.innerHTML = `El discriminante es: ${objLineal.calcularDiscriminante(
      valueA,
      valueB,
      valueC
    )}
            <br/>Existen: 2 respuestas`;
  } else if (rta == 0) {
    respDiscriminante.innerHTML = `El discriminante es: ${objLineal.calcularDiscriminante(
      valueA,
      valueB,
      valueC
    )} <br/>Existe una unica solucion o dos respuestas iguales`;
  } else {
    respDiscriminante.innerHTML = `La ecuacion no tiene soluciones reales`;
  }
}

//---------------------EJERCICIOS-ALTERNATIVOS
//ejercicio 6
function encontrarDivision() {
  const peso = document.querySelector("#peso-en-libras").value;
  const respPeso = document.querySelector("#respDisivion-boxeador");

  objAlternativo.divisionBoxeador(peso, respPeso);
}

//ejercicio 7
function calcularNumero() {
  const num1 = document.querySelector("#numero1").value;
  const num2 = document.querySelector("#numero2").value;
  const num3 = document.querySelector("#numero3").value;
  const resp = document.querySelector("#respNumeroMayor");
  const respNumMenor = document.querySelector("#respNumeroMenor");

  resp.innerText = `EL numero mayor es: ${objAlternativo.calcularNumeroMayor(
    num1,
    num2,
    num3
  )}`;
  objAlternativo.calcularNumeroMenor(num1, num2, num3, respNumMenor);
}

//ejercicio 8
function montoApagar() {
  const kilometros = document.querySelector("#kilometrosRecorridos").value;
  const respuestaKm = document.querySelector("#respKilometros");
  const precioBase = 300;

  objAlternativo.calcularValorAlquiler(kilometros, respuestaKm, precioBase);
}

//ejercicio 8
function calcularHora() {
  const resHora = document.querySelector("#mostrarHora");

  objAlternativo.calcularHoraSiguienteSegundo(resHora);
}

//---------------------EJERCICIOS-E-REPETICION
//ejercicio 11
let litros = 0;
let Qautos = 0;
let efectivo = 0;
let mayorCantidad = 0;

function guardarStock() {
  const gasolina = document.querySelector("#totalCombustible").value;
  litros = Number(gasolina);
  const totalComb = document.querySelector("#totalCombustible");
  totalComb.classList.add("inactive");
}

function guardarInfoGasolinera() {
  const litrosDespachados = document.querySelector("#litrosDespachados").value;

  const rtaGasolinera1 = document.querySelector("#rtaGasolinera1");
  const rtaGasolinera2 = document.querySelector("#rtaGasolinera2");
  const rtaGasolinera3 = document.querySelector("#rtaGasolinera3");
  const rtaGasolinera4 = document.querySelector("#rtaGasolinera4");

  if (litros > litrosDespachados) {
    litros -= Number(litrosDespachados);
    rtaGasolinera1.innerText = `Stock de gasolina: ${litros} litros`;
    Qautos += 1;
    rtaGasolinera2.innerText = `Cantidad de autos atendidos: ${Qautos}`;
    sumarDinero(Number(litrosDespachados));
    rtaGasolinera3.innerText = `Efectivo $${efectivo}`;
    calcMayor(litrosDespachados, rtaGasolinera4);
  } else {
    rtaGasolinera1.innerText = `Stock insuficiente, solo hay ${litros} en stock`;
  }
}

function sumarDinero(value) {
  efectivo += 1.25 * Number(value);
}

function calcMayor(num, container) {
  if (Number(num) > mayorCantidad) {
    mayorCantidad = num;
    container.innerText = `Mayor cantidad despachada: ${mayorCantidad} litros`;
  }
}

//ejercicio 12
function encontrarBinario() {
  const num = document.querySelector("#numeroBaseDiez").value;
  const respBinario = document.querySelector("#rtaBinario");

  respBinario.innerHTML = `En numeross binarios es: ${objRepeticion.convertirBinario(
    Number(num)
  )}`;
}
