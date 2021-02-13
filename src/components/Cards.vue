<template>
  <div class="container">
    <div class="flopp" v-if="getRound > 1">
      <div v-for="card in flopp" :key="card.value + card.suit">
        <img :src="require(`@/assets/cards/${card.img}`)" alt="card" />
      </div>
    </div>
    <div class="fourthCard" v-if="getRound > 2">
      <img :src="require(`@/assets/cards/${fourthCard[0].img}`)" alt="card" />
    </div>
    <div class="fifthCard" v-if="getRound > 3">
      <img :src="require(`@/assets/cards/${fifthCard[0].img}`)" alt="card" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    flopp() {
      return this.$store.getters.getFlopp;
    },
    fourthCard() {
      return this.$store.getters.getFourthCard;
    },
    fifthCard() {
      return this.$store.getters.getFifthCard;
    },
    getRound() {
      return this.$store.state.rounds.round
    }
  },
  created() {
    this.$store.dispatch("shuffleDeck")
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flopp {
  display: flex;
}
img {
  width: 58px;
  margin-left: 5px;
}
</style>
