<template>
  <div class="itemInfoPage" v-if="(showModal = 1)">
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
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                @click="closeModal"
              ></button>
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
import { ref } from "@vue/reactivity";
import emitter from "../assets/js/mitt";

export default {
  data() {
    return {};
  },

  setup() {
    let showModal = ref(0);
    emitter.on("hello", (val) => {
      if(val.type==true){
        showModal=1;
      }
      console.log(showModal);
    });

    function closeModal(){
      document.querySelector('.bgc').remove();
    }

    return {
      showModal,
      closeModal
    };
  },
};
</script>