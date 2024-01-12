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