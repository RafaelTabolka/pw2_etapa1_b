const chalk = require("chalk");
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("Qual o seu filme de terror favorito? ", (linguagem) => {
    console.log(chalk.red("Seu filme preferido é: ") + linguagem);
    readline.close()
})