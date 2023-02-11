function pow() {
    let x = prompt("Enter x value");
    let n = prompt("Enter n value");
    let result = Math.pow(x, n);
    alert(result);
        return Math.pow(x, n);
    }


// ---------TASK 1 Fundamentals part 3 ---------
function add7 () {
    let x = parseInt(prompt("Enter a number:"));
    let result = x + 7;
    alert(result);
}
add7()


// const input = prompt("What's your name?");
// alert(`Your name is ${input}`);

// ---------TASK 2 Fundamentals part 3 ---------

function multiply () {
    let numOne = parseInt(prompt("Enter a number:"));
    let numTwo = parseInt(prompt("Multiply by:"));
    let result = numOne * numTwo;
    alert(result);
}
multiply()

// ---------TASK 3 Fundamentals part 3 ---------


function capitalize () {
    let word = prompt("Capitalize first letter:");
    newWord = word[0].toUpperCase() + word.substring(1);
    alert(newWord);
}
capitalize()

/// 2nd iteration - Working properly :)

function capitalize () {
    let word = prompt("Capitalize first letter:");
    newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    alert(newWord);
}
capitalize()

// ---------TASK 4 Fundamentals part 3 ---------

function lastLetter () {
    let word = prompt("Write a word you want the last letter from:");
    newWord = word.charAt(word.length - 1);
    alert(newWord);
}
lastLetter()