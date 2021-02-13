<template>
  <div class="home">
    <div class="table">
      <Cards />
    </div>
    <Player :hand="hand"/>
    <Actions @getHand="getHand"/>
  </div>
</template>

<script>
import Actions from "../components/Actions";
import Cards from "../components/Cards";
import Player from "../components/Player";

export default {
  name: "Home",
  components: { Actions, Cards, Player },
  data() {
    return {
      hand: ''
    }
  },
  methods: {
    getHand(value) {
      this.hand = value
    }
  },
    created() {
    this.$store.dispatch("shuffleDeck")
    this.$store.dispatch("dealCards")
  }
};
</script, Cards>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.table {
  width: 650px;
  height: 350px;
  background: green;
  border: 3px solid black;
  border-radius: 48%;
  padding: 10px;
  box-sizing: border-box;
}
</style>
