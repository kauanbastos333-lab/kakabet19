let saldo = 1000;

function entrar() {
  let nome = document.getElementById("nome").value;
  if (nome === "") {
    alert("Digite seu nome");
    return;
  }

  document.getElementById("loginBox").style.display = "none";
  document.getElementById("cassino").style.display = "block";
  document.getElementById("player").innerText = nome;
  atualizarSaldo();
}

function atualizarSaldo() {
  document.getElementById("saldo").innerText = saldo;
}

function roleta() {
  if (saldo < 100) {
    alert("Saldo insuficiente");
    return;
  }

  saldo -= 100;

  if (Math.random() < 0.5) {
    saldo += 200;
    document.getElementById("resultado").innerText = "Você ganhou!";
  } else {
    document.getElementById("resultado").innerText = "Você perdeu!";
  }

  atualizarSaldo();
}

function slot() {
  if (saldo < 100) {
    alert("Saldo insuficiente");
    return;
  }

  saldo -= 100;

  if (Math.random() < 0.3) {
    saldo += 300;
    document.getElementById("resultado").innerText = "Jackpot!";
  } else {
    document.getElementById("resultado").innerText = "Não foi dessa vez!";
  }

  atualizarSaldo();
}
