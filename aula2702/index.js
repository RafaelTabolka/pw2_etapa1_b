const chalk = require("chalk");
const inquire = require("inquire");
const calculadora = require("calculadora");

inquire.prompt([
    {
        name: "Rafael", message: "Qual a nota do trabalho 1?"
    },
    {
        name: "Rafael Luz", message: "Qual a nota do trabalho 2?"
    },
    {
        name: "Priscila", message: "Qual a nota do trabalho 3?"
    },
    {
        name: "Gordo", message: "Qual a nota do trabalho 4?"
    }
]).then().catch();