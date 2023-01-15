// // SEQUENTIAL REQUESTS!
// async function get3PokemonSequential() {
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }

// // PARALLEL REQUESTS!
// async function get3Pokemon() {
// 	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1');
// 	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2');
// 	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3');
// 	const poke1 = await prom1;
// 	const poke2 = await prom2;
// 	const poke3 = await prom3;
// 	console.log(poke1.data);
// 	console.log(poke2.data);
// 	console.log(poke3.data);
// }

// get3Pokemon();

// // *******************************************
// // A better demonstration of the difference...
// // *******************************************
// function changeBodyColor(color, delay) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			document.body.style.backgroundColor = color;
// 			resolve();
// 		}, delay);
// 	});
// }

// // IN SEQUENCE
// async function lightShow() {
// 	await changeBodyColor('teal', 1000);
// 	await changeBodyColor('pink', 1000);
// 	await changeBodyColor('indigo', 1000);
// 	await changeBodyColor('violet', 1000);
// }
// // IN PARALLEL...
// // Everything is "sent off" at the same time
// // async function lightShow() {
// // 	const p1 = changeBodyColor('teal', 1000);
// // 	const p2 = changeBodyColor('pink', 1000);
// // 	const p3 = changeBodyColor('indigo', 1000);
// // 	const p4 = changeBodyColor('violet', 1000);
// // 	await p1;
// // 	await p2;
// // 	await p3;
// // 	await p4;
// // }

// lightShow();

// SEQUENCIAL REQUEST
// async function get3Pokemon(){
// 	const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
// 	const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
// 	const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
// 	console.log(poke3.data)
// 	console.log(poke3.data)
// 	console.log(poke3.data)
// }
// PARALLEL REQUEST
// async function get3Pokemon() {
// 	const prom1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
// 	const prom2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
// 	const prom3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
// 	const poke1 = await prom1
// 	const poke2 = await prom2
// 	const poke3 = await prom3
// 	console.log(poke1.data)
// 	console.log(poke2.data)
// 	console.log(poke3.data)
// }

// get3Pokemon()



function changeBodyColor(color, delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			document.body.style.backgroundColor = color
			resolve()
		}, delay);
	})

}
// sequantial request
// async function lightShow() {
// await changeBodyColor('teal', 1000)
// await changeBodyColor('pink', 1000)
// await changeBodyColor('red', 1000)
// await changeBodyColor('blue', 1000)
// await changeBodyColor('green', 1000)
// await changeBodyColor('black', 1000)

// }

// parallel request
async function lightShow() {
	const color1 = changeBodyColor('teal', 1000)
	const color2 = changeBodyColor('pink', 1000)
	const color3 = changeBodyColor('red', 1000)
	const color4 = changeBodyColor('blue', 1000)
	const color5 = changeBodyColor('green', 1000)
	const color6 = changeBodyColor('black', 1000)
	await color1
	await color2
	await color3
	await color4
	await color5
	await color6

}


lightShow()