<template>
  <div class="container">
    <div class="flopp" v-if="getRound > 1">
      <div v-for="card in flopp" :key="card.value + card.suit">
        <div>
          <img :src="require(`@/assets/cards/${card.img}`)" alt="card" />
        </div>
      </div>
    </div>
    <div class="fourthCard" v-if="getRound > 2">
      <div>
        <img :src="require(`@/assets/cards/${fourthCard[0].img}`)" />
      </div>
    </div>
    <div class="fifthCard" v-if="getRound > 3">
      <div>
        <img :src="require(`@/assets/cards/${fifthCard[0].img}`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    flopp() {
      return this.$store.state.cardDeck.flopp;
    },
    fourthCard() {
      return this.$store.state.cardDeck.fourthCard;
    },
    fifthCard() {
      return this.$store.state.cardDeck.fifthCard;
    },
    getRound() {
      return this.$store.state.rounds.round;
    },
  },
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
  width: 70px;
  margin-left: 5px;
}
</style>
