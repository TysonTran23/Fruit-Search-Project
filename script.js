const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//Empty array to store my suggestions
	let results = [];

	//Loop through each fruit
	//Lowercasing fruit and "str"
	//Checking to see if fruit contains any of str characters
	for (let fruit of fruits) {
		fruit = fruit.toLowerCase();
		if(fruit.includes(str.toLowerCase())) {
			results.push(fruit);
		}
	}
	//Return the current results array 
	return results;
}

function searchHandler(e) {
	//Grab user input and return the output
	let input = e.target.value

	//Here I am pasing my input variable to  "function search(str)" to compare the input with the fruits array
	let checkingSuggestions = search(input)

	//I am calling the showSuggestion function with arguments of 
	//1. Grabbing the array from the first function to show suggestions
	//2. Comparing that to my input
	showSuggestions(checkingSuggestions, input)
	
}

function showSuggestions(results, inputVal) {
	//Clear any previous suggestions by setting it to a empty string
suggestions.innerHTML = "";
	for (let item of results) {
		let fruit = document.createElement("li");
		fruit.innerText = item
		suggestions.append(fruit)
}
}

function useSuggestion(e) {
	//When you click on the suggested fruit, the input value changes to that suggestions
	input.value = e.target.value;
	//When the suggestion is clicked, clear the suggestion html to have no more suggestions
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

//Currently if I click on one of my suggestions, it returns 0 on the input
//When I type something in it gives me my suggestions, but when I back space and eventually get to a empty string, I get all the suggestions
