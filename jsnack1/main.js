$(document).ready(function () {


const bici = [
  {
    nome: "Graziella",
    peso: 2,
  },
  {
    nome: "BMX",
    peso: 5,
  },
  {
    nome: "Mountain Bike",
    peso: 8,
  },
  {
    nome: "E-bike",
    peso: 1,
  },
];
console.log(bici);

let min = bici[0].peso;

bici.forEach((bici, i) => {
  if (bici.peso <= min) {
    min = bici.peso;
    //console.log(min);
  }
});
 const biciLeggere = bici.filter((bike) => bike.peso == min )
// console.log(biciLeggere);
$("#res").append(`La bici più leggera è ${biciLeggere[0].nome} che pesa ${min}`);
})
