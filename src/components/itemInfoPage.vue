<template>
  <div class="itemInfoPage">
    <div class="bgc">
      <div
        class="moddal"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <router-link to="/">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </router-link>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "@vue/reactivity";
import emitter from "../assets/js/mitt";

export default {
  data() {
    return {};
  },

  setup() {
   
    emitter.on("hello", (val) => {
      console.log('v',val);
    });

   

    return {
    };
  },
};
</script>