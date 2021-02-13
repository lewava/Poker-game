<template>
  <div class="action-container">
    <form>
      <div class="top">
        <p>Time until next round: {{ time }} sec</p>
        <input type="number" placeholder="Amount" v-model="amount" />
      </div>
      <div>
        <button @click="fold">Fold</button>
        <button @click="check">Check</button>
        <button class="raise">Raise to {{ amount }}</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      amount: "0",
      time: "30",
    };
  },
  methods: {
    fold() {
      this.$store.dispatch("nextRound")
    },
    check() {
      this.$store.dispatch("nextRound")
    }
  }
};
</script>

<style>
.action-container {
  width: 100%;
  margin-right: 100px;
  display: flex;
  justify-content: flex-end;
}
form {
  display: flex;
  flex-direction: column;
}
.top {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ddd;
  height: 40px;
  width: 200px;
  text-align: center;
  border-radius: 8px;
  border: 1px solid rgb(182, 182, 182);
  font-size: 12px;
  font-weight: bold;
}
input {
  height: 45px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid rgb(182, 182, 182);
  margin-left: 5px;
  font-weight: bold;
  padding: 5px;
  box-sizing: border-box;
  font-size: 12px;
}
button {
  height: 35px;
  width: 100px;
  border-radius: 8px;
  border: 1px solid rgb(182, 182, 182);
  margin-left: 5px;
  font-weight: bold;
  box-sizing: border-box;
  font-size: 12px;
  cursor: pointer;
}
.raise {
    width: 150px;
}
</style>
