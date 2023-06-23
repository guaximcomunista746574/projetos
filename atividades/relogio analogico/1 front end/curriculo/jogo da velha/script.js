const players = ['Player 1', 'Player 2'];
let currentPlayer = '';
let gameActive = true;
let moves = 0;
let board = ['', '', '', '', '', '', '', '', ''];

// Sorteia um jogador para começar
function selectRandomPlayer() {
  const randomIndex = Math.floor(Math.random() * players.length);
  currentPlayer = players[randomIndex];
}

// Atualiza a exibição do jogador atual
function updateCurrentPlayer() {
  document.getElementById('current-player').textContent = currentPlayer;
}

// Realiza uma jogada na posição especificada
function makeMove(position) {
  if (!gameActive || board[position] !== '') return;

  board[position] = currentPlayer;
  document.getElementById('board').children[position].textContent = currentPlayer;
  moves++;

  if (checkWin()) {
    endGame(`${currentPlayer} venceu!`);
  } else if (moves === 9) {
    endGame('Empate!');
  } else {
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    updateCurrentPlayer();
  }
}

// Verifica se algum jogador venceu
function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
  ];
}

  for (let combo of winningCombos) {
 
  }
