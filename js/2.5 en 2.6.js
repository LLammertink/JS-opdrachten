//2.5 opdracht 1//
document.body.innerHTML += `<h1>Opdrachten 2.5 en 2.6</h1><br>`;
document.body.innerHTML += `Bewering 1 = ${1 < 4}<br>`;
document.body.innerHTML += `Bewering 2 = ${4 > 6}<br>`;
document.body.innerHTML += `Bewering 3 = ${'A' < 'g'}<br>`;
document.body.innerHTML += `Bewering 4 = ${5 == '5'}<br>`;
document.body.innerHTML += `Bewering 5 = ${5 != '5'}<br>`;
document.body.innerHTML += `Bewering 6 = ${421 >= 422}<br>`;
document.body.innerHTML += `Bewering 7 = ${8 === '8'}<br>`;
document.body.innerHTML += `Bewering 8 = ${8 !== '8'}<br><br>`;

//2.5 opdracht 2//
const x = 5;
const y = 8;
document.body.innerHTML += `Open de developers console om de vergelijkingen te zien.<br>`

console.log(`Vergelijking 1 = ${x < y}`);
console.log(`Vergelijking 2 = ${x === 5}`);
console.log(`Vergelijking 3 = ${y === 'z'}`);
// console.log(`Vergelijking 4 = ${y == z}`); z is not defined
console.log(`Vergelijking 4 = z is not defined`);
console.log(`Vergelijking 5 = ${x+3 === y}`);
console.log(`Vergelijking 6 = ${x+3+'hoi' === y+'hoi'}`);
//console.log(`Vergelijking 7 = ${y+z === 12}`);
console.log(`Vergelijking 7 = z is not defined`);

