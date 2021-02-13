<template>
  <div class="home">
    <div class="table">
      <Cards />
    </div>
    <Actions />
  </div>
</template>

<script>
import Actions from "../components/Actions";
import Cards from "../components/Cards";
export default {
  name: "Home",
  components: { Actions, Cards },
};
</script, Cards>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.table {
  width: 800px;
  height: 350px;
  background: green;
  border: 3px solid black;
  border-radius: 48%;
  padding: 10px;
}
</style>
