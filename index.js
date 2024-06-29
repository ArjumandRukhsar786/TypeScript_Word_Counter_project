#! /usr/bin/env node
import inquirer from "inquirer";
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
]);
const words = answers.Sentence.trim().split(" ");
// print the array of words to the consol
console.log(words);
// print the word count of the sentence to the console
console.log(`Your Sentence word count is ${words.length}`);
