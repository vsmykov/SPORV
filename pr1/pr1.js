let iString = "Hello word";
let iX = 45;
let iY = 43.5;
console.log("My string =" , iString,"\n", "My number =", iX,"and", iY)
let newX1=iX+5;
let newX2=newX1 + 5.5;
let newX3=newX1 + '5.5';
console.log(typeof newX1);
console.log(typeof newX2);
console.log(typeof newX3);
let iArray = new Array();
console.log(typeof iArray);
let iArrayTOO = [];
console.log(typeof iArrayTOO);
let iArray3 = [1,2,3,"one","two","three"];
console.log(typeof iArray3,iArray3,"\n","Нулевой элемент = " ,iArray3[0],"Третий элемент = " ,iArray3[3]);
iArray3[4] = 4;
console.log(iArray3);
let iMatrix = [[1,2,3],[4,5,6]];
console.log(typeof iMatrix, iMatrix,iMatrix[1][1]);
let people = [
  ["Vlad", 21, false],
  ["Vitya", 28, false],
  ["Dasha", 25, true],
];
console.log(typeof people, people);