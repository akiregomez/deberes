class Lineales {
  constructor() {}

  calcularSalario(horas, valor) {
    return horas * valor;
  }

  calcularAreaTrapecio(baseMenor, baseMayor, altura) {
    return ((Number(baseMayor) + Number(baseMenor)) / 2) * altura;
  }

  calcularTerreno(query, terreno) {
    return (query * terreno) / 100;
  }
  calcularDiscriminante(valueA, valueB, valueC) {
    return valueB * valueB - 4 * valueA * valueC;
  }

  encontrarSextoValor(num1, num2, num3, num4, num5) {
    let series = [];
    series.push(num1, num2, num3, num4, num5);

    let sexto = "";

    for (let i = 0; i < series.length; i++) {
      for (let j = 0; j < series[i].length; j++) {
        if (i === j) {
          sexto += series[i][j];
        }
      }
    }

    return sexto;
  }
}

class alternativos {
  constructor() {}

  divisionBoxeador(peso, container) {
    if (peso >= 124 && peso <= 129) {
      container.innerText = "Pertenece a la division 53 kg";
    } else if (peso >= 130 && peso <= 137) {
      container.innerText = "Pertenece a la division 60 kg";
    } else if (peso >= 138 && peso <= 145) {
      container.innerText = "Pertenece a la division 63 kg";
    } else {
      container.innerText = "Valor no valido, por favor vuelve a intentar";
    }
  }

  calcularNumeroMayor(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }

  calcularNumeroMenor(num1, num2, num3, container) {
    let numMenor = Math.min(num1, num2, num3);
    if (Number.isFloat(numMenor)) {
      const entero = Math.trunc(numMenor);
      const decimal = (numMenor - entero).toFixed(2);
      container.innerText = `La parte fraccionaria del numero menor es: ${decimal}`;
    }
  }

  calcularValorAlquiler(km, container) {
    if (km > 0 && km <= 300) {
      container.innerText =
        "Por los primeros 300 km debe cancelar: $240.000" +
        "\nIncluido IVA: $300.000";
    } else if (km > 300 && km <= 1000) {
      const price1 = 300000 + calcularExceso(km, 15000);
      const priceWithoutIVA = (price1 * 80) / 100;
      container.innerText = `Precio del alquiler: $${price1} \nSin iva: $${priceWithoutIVA}`;
    } else if (km > 1000) {
      const price1 = 300000 + calcularExceso(km, 10000);
      const priceWithoutIVA = (price1 * 80) / 100;
      container.innerText = `Precio del alquiler: $${price1} \nSin iva: $${priceWithoutIVA}`;
    } else {
      container.innerText = `Valor no valido`;
    }
  }

  calcularHoraSiguienteSegundo(container) {
    const date = new Date();
    setTimeout(function () {
      container.innerText = `${date.getHours()}h ${date.getMinutes()}min ${date.getSeconds()}seg`;
    }, 1000);
  }
}

class repeticion {
  constructor() {}

  convertirBinario(num) {
    return num.toString(2);
  }
}

Number.isFloat =
  Number.isFloat ||
  function (value) {
    return (
      typeof value === "number" &&
      isFinite(value) &&
      Math.floor(value) !== value
    );
  };

function calcularExceso(km, tarifa) {
  const kmExcedidos = km - 300;

  console.log(kmExcedidos);
  return tarifa * kmExcedidos;
}
