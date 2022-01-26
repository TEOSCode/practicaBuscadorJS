//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
const resultado = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;
//Generar un objeto con la busqueda
const datosBusqueda = {
  marca: '',
  year: '',
  minimo: '',
  maximo: '',
  puertas: '',
  transmision: '',
  color: '',
};
//eventos
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos);
  //Llena las opciones de años
  llenarSelect();
});
//Event listener para los select de busqueda
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value;
  filtrarAutos();
});
year.addEventListener('change', e => {
  datosBusqueda.year = parseInt(e.target.value);
  filtrarAutos();
});
minimo.addEventListener('change', e => {
  datosBusqueda.minimo = parseInt(e.target.value);
  filtrarAutos();
});
maximo.addEventListener('change', e => {
  datosBusqueda.maximo = parseInt(e.target.value);
  filtrarAutos();
});
puertas.addEventListener('change', e => {
  datosBusqueda.puertas = parseInt(e.target.value);
  filtrarAutos();
});
transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value;
  filtrarAutos();
});
color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value;
  filtrarAutos();
});

//funciones
function mostrarAutos(autos) {
  limpiarHTML();
  autos.forEach(auto => {
    const {marca, modelo, year, puertas, transmision, precio, color} = auto;
    const autoHTML = document.createElement('tr');
    autoHTML.innerHTML = `
            <td>${marca}</td>
            <td>${modelo}</td>
            <td>${year}</td>
            <td>${puertas}</td>
            <td>${transmision}</td>
            <td>$ ${precio}</td>
            <td>${color}</td>
        `;
    resultado.appendChild(autoHTML);
  });
}
//limpiar HTML
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
//funcion que filtra en base a la busqueda
function filtrarAutos() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarYear)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuertas)
    .filter(filtrarTransmision)
    .filter(filtrarColor);

  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResult();
  }
}
function noResult() {
  limpiarHTML();
  const autoHTML = document.createElement('tr');
  autoHTML.innerHTML = `
    <td colspan="7" style="text-align:center">No hay autos con esa descripción</td>
   `;
  resultado.appendChild(autoHTML);
}
function filtrarMarca(auto) {
  const {marca} = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
  }
  return auto;
}
function filtrarYear(auto) {
  const {year} = datosBusqueda;
  if (year) {
    return auto.year === year;
  }
  return auto;
}
function filtrarMinimo(auto) {
  const {minimo} = datosBusqueda;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}
function filtrarMaximo(auto) {
  const {maximo} = datosBusqueda;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
function filtrarPuertas(auto) {
  const {puertas} = datosBusqueda;
  if (puertas) {
    return auto.puertas === puertas;
  }
  return auto;
}
function filtrarTransmision(auto) {
  const {transmision} = datosBusqueda;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  const {color} = datosBusqueda;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
//Llenar los años de select
function llenarSelect() {
  for (let i = max; i >= min; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent = i;
    year.appendChild(opcion);
  }
}
