$(document).ready(function () {

const randomArrayNum = []
const lunghezza = random(2, 50);
for (var i = 0; i < lunghezza; i++) {
  randomArrayNum[i] = random(1, 100);
}

const a = prompt("Inserisci a: ")
const b = prompt("Inserisci b: ")

arrayCheck(a, b, randomArrayNum)
arrayCheck2(a, b, randomArrayNum)
})

function arrayCheck(a, b, array){
  const newArray = [];
  let temp= 0;
  if (a < b) {

    // console.log(newArray);
    // console.log(a);
    // console.log(b);
    // console.log(array);

    array.forEach((item, i) => {
      // const arrayFilt = array.filter((element, index, array)=> {
      //   return index >= a && index <=b
      // })
      if (i >= a && i <= b) {
        newArray.push(item);
      }

    });
  } else {
    temp = a;
    array.forEach((item, i) => {
      if (i >= a && i <= b) {
        newArray.push(item);
      }
    });
  }
  console.log(newArray);
  $('#res').append(`L'array era ${array}, <br> a = ${a} b= ${b} <br> il nuovo array sarà: ${newArray}`);
}


function arrayCheck2(a, b, array){
  let newArray = [];
  newArray = array.slice(a, b);
  console.log(newArray);
  $('#res2').append(`L'array era ${array}, <br> a = ${a} b= ${b} <br> il nuovo array sarà: ${newArray}`)
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
