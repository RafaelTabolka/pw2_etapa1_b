const chalk = require("chalk");
const inquirer = require("inquirer");
const calculadora = require("./calculadora");
const validacao = require("./validacao")

inquirer.prompt([
    {
        name: "t1", message: "Qual a nota do trabalho 1?"
    },
    {
        name: "p1", message: "Qual a nota do trabalho 2?"
    },
    {
        name: "p2", message: "Qual a nota do trabalho 3?"
    },
    {
        name: "p3", message: "Qual a nota do trabalho 4?"
    }
]).then((answers) => {
    console.log(answers.t1)
    console.log(answers.p1)
    console.log(answers.p2)
    console.log(answers.p3)
    console.log(`Sua média é: ${calculadora.media(answers.t1, answers.p1, answers.p2, answers.p3)}`)
    console.log(validacao.validation(calculadora.media(answers.t1, answers.p1, answers.p2, answers.p3)))
})
.catch((error) => {
    if(error.isTtyError){
        console.log("pepper in the ass of others is refreshment");
    }  
});