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
  mostrarAutos();
  //Llena las opciones de años
  llenarSelect();
});
//Event listener para los select de busqueda
marca.addEventListener('change', e => {
  datosBusqueda.marca = e.target.value;
  filtrarAutos();
});
year.addEventListener('change', e => {
  datosBusqueda.year = e.target.value;
});
minimo.addEventListener('change', e => {
  datosBusqueda.minimo = e.target.value;
});
maximo.addEventListener('change', e => {
  datosBusqueda.maximo = e.target.value;
});
puertas.addEventListener('change', e => {
  datosBusqueda.puertas = e.target.value;
});
transmision.addEventListener('change', e => {
  datosBusqueda.transmision = e.target.value;
});
color.addEventListener('change', e => {
  datosBusqueda.color = e.target.value;
  console.log(datosBusqueda);
});

//funciones
function mostrarAutos() {
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
//funcion que filtra en base a la busqueda
function filtrarAutos() {
  const resultado = autos.filter(filtrarMarca);
  console.log(resultado);
}
function filtrarMarca(auto) {
  const {marca} = datosBusqueda;
  if (marca) {
    return auto.marca === marca;
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
