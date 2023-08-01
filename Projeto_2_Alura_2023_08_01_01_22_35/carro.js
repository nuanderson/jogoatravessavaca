//carro

let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [10, 2.5, 3, 5, 3.3, 2.3]
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i in imagemCarros){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i in imagemCarros){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i in imagemCarros){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaATela(xCarro){
  return xCarro < -50;
}