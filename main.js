// função que gera um número aleatório entre 1 e 100
function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 1;
}

// função que gera número de vitórias
function getPlayerStats(wins, losses) {
  let result = 0;
  let plays = 10;
  wins = getRandomNumber();
  losses = getRandomNumber(); 
  
  for(let i = 0; i <= plays; i++){
    if(i % 2 == 0){
      wins++;
    }else{
      losses++;
    }
  }
  result = wins - losses;

  if(result < 0){
    result *= -1;
  }
  return result;
}

// função que retorna a classificação do jogador
function getPlayerRank(){

  let totalWins = getPlayerStats();
  let ranking = '';

  if (totalWins > 0 && totalWins <= 10) {
    ranking = "Ferro";
  } else if (totalWins >= 11 && totalWins <= 20) {
    ranking = "Bronze";
  } else if (totalWins >= 21 && totalWins <= 50) {
    ranking = "Prata";
  } else if (totalWins >= 51 && totalWins <= 80) {
    ranking = "Ouro";
  } else if (totalWins >= 81 && totalWins <= 90) {
    ranking = "Diamante";
  } else if (totalWins >= 91 && totalWins <= 100) {
    ranking = "Lendário";
  } else if (totalWins >= 101) {
    ranking = "Imortal";
  } else {
    ranking = "Inativo";
  }

  return `O Herói tem de saldo de vitórias: ${totalWins} e está no nível de ${ranking}.`;
}