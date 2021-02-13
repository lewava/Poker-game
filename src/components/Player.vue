<template>
  <div class="player">
    <div
      class="cards-container"
      :style="!getfold ? 'visibility: visible' : 'visibility: hidden'"
    >
      <div class="cardOne-container">
        <img
          class="cards cardOne"
          :src="require(`@/assets/cards/${getPlayer.cards[0].img}`)"
        />
      </div>
      <div class="cardTwo-container">
        <img
          class="cards cardTwo"
          :src="require(`@/assets/cards/${getPlayer.cards[1].img}`)"
        />
      </div>
    </div>
    <div class="wrapper">
      <div>
        <img
          class="profilePicture"
          :src="require(`@/assets/${getPlayer.img}.jpg`)"
          alt="profilepicture"
        />
      </div>

      <div class="player-container">
        <div>
          <p class="name">{{ getPlayer.name }}</p>
          <p class="money">${{ getPlayer.money }}</p>
        </div>
      </div>
    </div>
    <div class="hand">
      <h4>Your best hand: {{hand}}</h4>
    </div>
  </div>
</template>

<script>
import { solveHand } from "@/logic/solveHand.js";

export default {
  props: ["hand"],
  data() {
    return {
      c: [],
    };
  },
  computed: {
    getPlayer() {
      return this.$store.state.players.player;
    },
    getfold() {
      return this.$store.state.players.player.fold;
    },
  },
};
</script>

<style scoped>
.player {
  margin-top: -100px;
}
.cards-container {
  display: flex;
  justify-content: center;
  margin-bottom: -75px;
  margin-left: 60px;
}
.cardOne {
  width: 85px;
  transform: rotate(-10deg);
  margin-right: -70px;
  margin-top: -12px;
}
.cardTwo {
  width: 85px;
  transform: rotate(10deg);
}
.wrapper {
  display: flex;
  align-items: center;
  position: sticky;
}
.profilePicture {
  width: 80px;
  border-radius: 50px;
  border: 2px solid rgb(182, 182, 182);
  margin-right: -25px;
  position: sticky;
}
.player-container {
  border: 2px solid rgb(182, 182, 182);
  display: flex;
  border-radius: 8px;
  border-left: none;
  height: 40px;
  width: 180px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: white;
}
p {
  margin: 0;
  font-weight: bold;
}
.name {
  margin-bottom: 5px;
}
.hand {
  margin-top: -11px;
  margin-left: 65px;
  display: flex;
  justify-content: center;
}
h4 {
  display: block;
  margin: 0;
  font-size: 14px;
}
</style>
