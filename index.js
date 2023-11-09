//Classificador de Nível de Herói
//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo: Se XP for menor do que 1.000 = Ferro - Se XP for entre 1.001 e 2.000 = Bronze -  Se XP for entre 2.001 e 5.000 = Prata - Se XP for entre 6.001 e 7.000 = Ouro - Se XP for entre 7.001 e 8.000 = Platina - Se XP for entre 8.001 e 9.000 = Ascendente - Se XP for entre 9.001 e 10.000= Imortal - Se XP for maior ou igual a 10.001 = Radiante
//Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"

let pokemonPoochyena1 = "XP< 1000, sexo masculino, sem vidas para continuar jogando"
let pokemonZigzagoon = "XP >=1001 === 2000, sexo feminino, sem vidas para continuar jogando";
let pokemonDragonite1 = "XP >2001 === 5000, sexo masculino, sem vidas para continuar jogando";
let pokemonDragonite2 = "XP >6001 ===7000, sexo feminino, sem vidas para continuar jogando";
let pokemonDragonite3= "XP >7001 === 8000, sexo feminino, sem vidas para continuar jogando";
let pokemonPoochyena2 = "XP 8001 ===9000, sexo feminino, sem vidas para continuar jogando"
let pokemonHurmple = "XP >9000 ===10000, sexo masculino, tem 7 vidas para continuar jogando";
let pokemonLugia = "XP >10001, sexo masculino, tem 8 vidas para continuar jogando "

let nivel = "Ferro, Bronze, Prata, Ouro, Platina, Ascendente, Imortal e Radiante ";
let ferro = "XP< 1000";
let bronze = "XP >=1001 === 2000";
let prata = "XP >2001 === 5000";
let ouro = "XP >6001 ===7000";
let platina = "XP >7001 === 8000";
let ascendente = "XP 8001 ===9000";
let imortal = "XP >9000 ===10000";
let radiante = "XP >10001"
let sexo = "sexo feminino ou masculino";
let vidas = "(vidas == sem vidas para continuar jogando"
let resultado = "sem vidas para continuar jogando"

console.log("Qual o pokemon com maior nível de experiência?")
switch (nivel) {
    case "XP >10001":
      
    default :
      console.log("Analisando o desempenho, vemos que Lugia tem a pontuação maior que 10001 XP, considerado o maior nível de experiência!")
}

const qualpokemonpodesercadastradocomsucesso = "O Herói de nome Lugia está no nível Radiante"

console.log(qualpokemonpodesercadastradocomsucesso +
    " - Pontuação de 10001 XP" +
    " - sexo Masculino"  +
    " - e ainda tem 8 vidas para continuar jogando")

console.log(resultado = "Não podem ser cadastrados os pokemons sem vidas para continuar jogando, sendo desclassificados")

let pokemontemvidasparacontinuarjogando = "Hurmple e Lugia"
const podemoscadastrar = "Hurmple e Lugia cadastrados com sucesso!"

console.log(cadastradoscomsucesso = "Hurmple e Lugia cadastrados com sucesso, estando o Herói de nome Lugia no nível Radiante!")