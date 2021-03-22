$(document).ready(function () {

const icone =
  [
  	{
  		name: 'cat',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'crow',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dog',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dove',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dragon',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'horse',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'hippo',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'fish',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'carrot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'apple-alt',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'lemon',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'pepper-hot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'user-astronaut',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-graduate',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-ninja',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-secret',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	}
  ];
// console.log(icone);

// var template = $("#template-icon li").clone();

icone.forEach((icona, i) => {
  const template = $("#template-icon li").clone();
  let stileIcona = String(icona.prefix+icona.name);
  // template.css("display","none")
  template.children("i").addClass(`${icona.family}`);
  template.children("i").addClass(stileIcona);
  template.children("span").text(icona.name);
  $("#res").append(template);
  // console.log("ok", icona);

  if (icona.type == "animal") {
    template.children("i").css("color","blue");
  } else if (icona.type == "vegetable") {
    template.children("i").css("color","orange");
  } else if (icona.type == "user") {
    template.children("i").css("color","purple");
  }

// filterItems();
  //


});



// icone.forEach((icona, i) => {
//   $("#res").append(`<li><i class="${icona.family} ${icona.prefix}${icona.name}"></i> <p> ${icona.name}</p> </li>`)
//   if (icona.type == "animal") {
//
//   }
});


//function
// function filterItems(){
//   let valueOption = $("#selector").val()
//   console.log(valueOption);
//   if (valueOption=="all") {
//     template.css("display","flex")
//   } else if (valueOption=="animal") {
//     template.css("display","none")
//   }
// }
