let add7 = n => n + 7;
let multiply = (a, b) => a * b;

let capitalize = inputText => {
    const inputArray = inputText.split(" ");
    for (let i = 0; i < inputArray.length; i++) {
        inputArray[i] = String(inputArray[i]).charAt(0).toUpperCase() + String(inputArray[i]).slice(1).toLowerCase();
    }
    return inputArray.join(" ");
}

let lastLetter = inputText => inputText.at(-1);

console.log(add7(5))
console.log(multiply(3, 5))
console.log(capitalize("ABRAHAM"))
console.log(capitalize("alabama aratke"))
console.log(capitalize("karARTE"))
console.log(lastLetter("SkibidQ"))