new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    isStart: false,
    logs: [],
  },
  methods: {
    start: function() {
      this.playerHealth = 100
      this.monsterHealth = 100
      this.isStart = true
      this.logs = []
    },
    attack: function() {
      const playerDamage = this.getDamage(3, 10)
      const monsterDamage = this.getDamage(5, 12)
      this.playerHealth -= playerDamage
      this.monsterHealth -= monsterDamage
      this.logs.unshift(
        {
          isPlayer: true,
          text: 'Player hit monter ' + playerDamage + ' damage',
        },
        {
          isPlayer: false,
          text: 'Monster hit player ' + monsterDamage + ' damage',
        },
      )
      this.checkWin()
    },
    heal: function() {
      const monsterDamage = this.getDamage(5, 12)
      this.playerHealth -= monsterDamage
      this.playerHealth = Math.min(100, this.playerHealth + 10)
      this.logs.unshift(
        {
          isPlayer: true,
          text: 'Player heal 8 hp',
        },
        {
          isPlayer: false,
          text: 'Monster hit player ' + monsterDamage + ' damage',
        },
      )
      this.checkWin()
    },
    giveUp: function() {
      this.isStart = false
    },
    getDamage: function(min, max) {
      return Math.floor(Math.random() * max + min)
    },
    checkWin: function() {
      if (this.playerHealth <= 0) {
        if (confirm('You lost, wanna try new game ?')) {
          this.start()
        } else {
          this.isStart = false
        }
      }

      if (this.monsterHealth <= 0) {
        if (confirm('You win, wanna try new game ?')) {
          this.start()
        } else {
          this.isStart = false
        }
      }
    },
  },
})
