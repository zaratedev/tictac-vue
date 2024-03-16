<template>
  <div>
    <h1>{{ msg }}</h1>
    <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
      <button type="button" v-for="(cell, colIndex) in row" :key="colIndex" @click="click(rowIndex, colIndex)">
        {{ cell }}
      </button>
    </div>
    <p v-if="winner">El ganador es {{ player }}</p>
    <button @click="reset" class="restart">Reiniciar</button>
  </div>
</template>

<script>
export default {
  name: 'TicTac',
  data () {
    return {
      msg: 'TicTac',
      player: '',
      winner: false,
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ]
    }
  },
  methods: {
    click(rowIndex, colIndex) {
      this.player = this.currentPlayer;

      this.$set(this.board[rowIndex], colIndex, this.player);
      this.winner = this.checkWinner(rowIndex, colIndex);
    },
    checkWinner(row, col) {
      if (this.board[row].every(cell => cell === this.player)) return true;
      if (this.board.every(row => row[col] === this.player)) return true;
      if (row === col && this.board.every((row, index) => row[index] === this.player)) return true;
      if (row + col === 2 && this.board.every((row, index) => row[2 - index] === this.player)) return true;
      
      return false;
    },
    reset() {
      this.player = '';
      this.winner = false;
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    }
  },
  computed: {
    currentPlayer() {
      if (this.player == '') {
        return 'X';
      }

      return this.player == 'X' ? 'O' : 'X';
    }
  }
}
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  width: 50px;
  height: 50px;
}

.restart {
  margin-top: 1em;
  color: white;
  background-color: #41B883;
  width: auto !important;
  cursor: pointer;
  border: 0px;
}
</style>