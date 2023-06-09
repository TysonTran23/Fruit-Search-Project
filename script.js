const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruits = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];
//Change the fruits array to lowercase Once
const lowercaseFruits = fruits.map((value) => {
  return value.toLowerCase();
});

function search(str) {
  //Empty array to store my suggestions
  let results = [];
  //Loop through each fruit
  //Lowercasing str
  //Checking to see if fruit contains any of str characters
  str = str.toLowerCase();
  if (str.length > 2) {
    for (let fruit of lowercaseFruits) {
      if (fruit.includes(str)) {
        results.push(fruit);
      }
    }
  }
  //Return the current results array
  return results;
}

function searchHandler(e) {
  //Grab user input and return the output
  let input = e.target.value;

  //Here I am pasing my input variable to  "function search(str)" to compare the input with the fruits array
  //I am also checking to see if input is EMPTY "", if it is reset the results array to empty, if not then continue on with giving suggestions
  let checkingSuggestions = input === "" ? [] : search(input);

  //I am calling the showSuggestion function with arguments of
  //1. Grabbing the array from the first function to show suggestions
  //2. Comparing that to my input
  showSuggestions(checkingSuggestions, input);
}

function showSuggestions(results, inputVal) {
  //Clear any previous suggestions by setting it to a empty string
  suggestions.innerHTML = "";
  for (let item of results) {
    let fruit = document.createElement("li");
    fruit.innerText = item;
    suggestions.append(fruit);
  }
}

function useSuggestion(e) {
  //When you click on the suggested fruit, the input value changes to that suggestions
  //Changed from e.target.value TO => e.target.innerText
  input.value = e.target.innerText;

  //When the suggestion is clicked, clear the suggestion html to have no more suggestions
  suggestions.innerHTML = "";
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);

//Currently if I click on one of my suggestions, it returns 0 on the input
//When I type something in it gives me my suggestions, but when I back space and eventually get to a empty string, I get all the suggestions
