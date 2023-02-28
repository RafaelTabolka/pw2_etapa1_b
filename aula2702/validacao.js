const chalk = require("chalk")

module.exports = {
    validation(media){
        if(media < 4.9) {
            console.log(chalk.bgRed("O Status do aluno é Reprovado"))
        } else if(media > 4.9 && media < 5.9) {
            console.log(chalk.bgYellow("O Status do aluno é: Recuperação"))
        } else {
            console.log(chalk.bgGreen("O Status do aluno é Aprovado."))
        }
    }
}

//4.9 retido
// 5.9 recuperação e aciam aprovado