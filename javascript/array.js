// function sumOfTripledEvens(array) {
//   return array
//     .filter((num) => num % 2 === 0)
//     .map((num) => num * 3)
//     .reduce((acc, curr) => acc + curr)
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(sumOfTripledEvens(arr))

// CAMELIZE INPUT STRING //

// function camelize(inputString) {
//     let arr = inputString.split('-');
//     for (i = 1; i < arr.length; i++) {
//         arr[i] = String(arr[i]).charAt(0).toUpperCase() + String(arr[i]).slice(1);
//     }
//     return arr.join('');
// }

// function camelizeNew(str) {
//     return str
//         .split('-')
//         .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
//         .join('')
//     }

// console.log(camelize("background-color-image"))
// console.log(camelizeNew("list-style-image"))
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// FILTER BY RANGE //

// function filterRange(inArr, min, max) {
//     return inArr
//         .filter((num) => (num >= min && num <= max))
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(filtered)

// DESCENDING SORT //

// let arr = [5, 2, 1, -10, 8];

// console.log(arr.sort( (a, b) => b - a));

// RANDOM SHUFFLE //

// function shuffle(array) {
//     let currentIndex = array.length;

//     while (currentIndex != 0) {
//         let randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
// }

// let arr = [1, 2, 3]
// shuffle(arr);
// console.log(arr);

// FILTER UNIQUE ARRAY MEMBERS //

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(strings.filter(onlyUnique))