<template>
  <div class="itemInfoPage" >
    abc
  </div>
</template>

<script>
import emitter from "../assets/js/mitt";

export default {
  data() {
    return {
      hello: "",
    };
  },
  setup() {
    emitter.on("hello", (val) => {
      console.log(val);
    });
  },
};
</script>