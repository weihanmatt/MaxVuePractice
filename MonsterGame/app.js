new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame() {
      this.gameIsRunning = true
      this.playerHealth = 100
      this.monsterHealth = 100
      this.turns = []
    },
    attack() {
      let damage = this.caculateDamage(10, 3)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster for ' + damage
      })
      if (this.checkWin()) {
        return
      }

      this.monsterAttack()
    },
    specialAttack() {
      let damage = this.caculateDamage(20, 10)
      this.monsterHealth -= damage
      this.turns.unshift({
        isPlayer: true,
        text: 'Player hits Monster hard for ' + damage
      })
      if (this.checkWin()) {
        return
      }
      this.monsterAttack()
    },
    heal() {
      if (this.playerHealth <= 90) {
        this.playerHealth += 10
      } else {
        this.playerHealth = 100
      }
      this.turns.unshift({
        isPlayer: true,
        text: 'Player heals for 10!'
      })
      this.monsterAttack()
    },
    giveUp() {
      this.gameIsRunning = false
    },
    monsterAttack() {
      let damage = this.caculateDamage(12, 5)
      this.playerHealth -= damage
      this.turns.unshift({
        isPlayer: false,
        text: 'Monster hits Player for ' + damage
      })
      this.checkWin()
    },
    caculateDamage(max, min) {
      return Math.max(Math.floor(Math.random() * max + 1, min))
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! New Game?')) {
          this.startGame()
        } else {
          this.gameIsRunning = false
        }
        return true
      }
      return false
    }
  }
})
