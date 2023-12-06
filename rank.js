function ranks(wins,loss) {
  sum = wins - loss;

  if (sum <= 10) {
    rank = "Ferro";
  } else if (sum <= 20) {
    rank = "Bronze";
  } else if (sum <= 20) {
    rank = "Prata";
  } else if (sum <= 50) {
    rank = "Ouro";
  } else if (sum <= 80) {
    rank = "Diamante";
  } else if (sum <= 100) {
    rank = "Lendario";
  } else if (sum > 100) {
    rank = "Imortal";
  }
  console.log(
    `O Herói tem o salde de vitórias de ${sum} está no nivel de ${rank} `
  );
}

ranks(100, 1);
