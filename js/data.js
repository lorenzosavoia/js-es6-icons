const arrayData =[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];




// arrayData.forEach((element) => {
	
// 	const template = `
// 		<div>
// 			<div><i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i></div>
// 			<div>${element.name}</div>
// 		</div>
// 	`
// 	container.innerHTML += template;
	
// });


const container = document.querySelector('.container');
let select = document.getElementById('filter');

let animal = arrayData.filter((element) => {
	return element.type == 'animal';
});
let vegetable = arrayData.filter((element) => {
	return element.type == 'vegetable';
});
let user = arrayData.filter((element) => {
	return element.type == 'user';
});

console.log(user,animal,vegetable);



for (let i = 0; i < arrayData.length; i++) {
	container.innerHTML += cardGenerator(arrayData[i]);
}

select.addEventListener('change', function () {
	switch (select.value) {
		case 'all':
			container.innerHTML = '';
			console.log('sono all');

			arrayData.forEach((element) => {
				container.innerHTML += cardGenerator(element);
			});
			break;
		case 'animal':
			container.innerHTML = '';
			console.log('sono aniaml');
			animal.forEach((element) => {
				container.innerHTML += cardGenerator(element);
			});
			break;
		case 'vegetable':
			container.innerHTML = '';
			console.log('sono verdure');
			vegetable.forEach((element) => {
				container.innerHTML += cardGenerator(element);
			});
			break;
		case 'user':
			container.innerHTML = '';
			console.log('sono user');
			user.forEach((element) => {
				container.innerHTML += cardGenerator(element);
			});
			break;
	}
	
});


function cardGenerator(element) {

	const template = `
        <div class"${element.type} ">
 			<div><i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i></div>
 			<div>${element.name}</div>
 		</div>
        `;
	return template;
}