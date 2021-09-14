<template>
  

  <mainPage></mainPage>
  <itemInfoPage></itemInfoPage>

  
</template>

<script>
import mainPage from "./components/mainPage.vue";
// import itemInfoPage from "./components/itemInfoPage.vue";

// import { reactive } from "vue";

export default {
  name: "App",
  components: {
    mainPage,
    // itemInfoPage,
  },

  // setup() {
  //   let btnMsg = reactive({
  //     name: "Computer",
  //   });
  //   function showEquipmentData(da) {
  //     // this.flag = !this.flag;'
  //     btnMsg.name = da;
  //   }
  //   return {
  //     showEquipmentData,
  //     btnMsg,
  //   };
  // },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
#app {
  font-family: "Microsoft JhengHei", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>


