<template>
  <header>
    <nav class="navbar navbar-dark bg-dark text-center text-white">
      <h4 class="text-center">Equipment</h4>
    </nav>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {{ modelType }}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#" @click="typeSel" vlaue="audio"
                >外場音響</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="typeSel"
                value="spotlight"
                >Spot Light</a
              >
            </li>
            <li>
              <a class="dropdown-item" href="#" @click="typeSel" value="truss"
                >Truss</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="typeSel"
                value="microphone"
                >麥克風組</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                @click="typeSel"
                value="instrument"
                >樂器</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div v-for="(item, index) in equipmentVal" :key="index" class="col-3">
            {{ item }}
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modelType: "外場音響",
      equipmentVal: [],
    };
  },
  methods: {
    typeSel(e) {
      this.modelType = e.target.innerText;
      let equipment = {
        audio: ["Yamaha A12", "Yamaha A14", "Yamaha A16"],
        spotlight: ["舞台燈"],
        truss: ["方形骰", "45CM", "120CM", "200CM"],
        microphone: ["2入", "4入", "6入", "8入"],
        instrument: ["guitar", "keyboard", "drum", "bass", "Saxphone"],
      };
      if (this.modelType == "外場音響") {
        this.equipmentVal = equipment.audio;
      }
      if (this.modelType == "Spot Light") {
        this.equipmentVal = equipment.spotlight;
      }
      if (this.modelType == "Truss") {
        this.equipmentVal = equipment.truss;
      }
      if (this.modelType == "麥克風組") {
        this.equipmentVal = equipment.microphone;
      }
      if (this.modelType == "樂器") {
        this.equipmentVal = equipment.instrument;
      }
    },
  },
};
</script>
