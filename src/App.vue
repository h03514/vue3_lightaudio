<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld></HelloWorld> -->
  <!-- <testEmit1></testEmit1> -->
  <mainPage></mainPage>
</template>

<script>
import mainPage from "./components/mainPage.vue";

import { reactive } from "vue";

export default {
  name: "App",
  components: {
    mainPage
  },

  setup() {
    let btnMsg = reactive({
      name: "Computer"
    });
    function showEquipmentData(da) {
      // this.flag = !this.flag;'
      btnMsg.name = da;
    }
    return {
      showEquipmentData,
      btnMsg
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


