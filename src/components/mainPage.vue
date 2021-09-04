<template>
  <header>
    <nav class="navbar navbar-dark bg-dark text-center text-white">
      <h4 class="text-center">Equipment</h4>
    </nav>
  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="dropdown text-start">
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
        <div
          v-for="(item, index) in equipmentVal"
          :key="index"
          class="col-3 item"
        >
          <div class="itemDiv">
            <div class="img"><img :src="item.photo" width="100" alt="" /></div>
            <h5>{{ item.type }}</h5>
            <p class="intro">{{item.intro}}</p>
            <button class="btn btn-secondary">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import { reactive } from '@vue/reactivity';
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
        audio: [
          {
            type: "Yamaha A12",
            intro:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, labore. ",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/no23MCPgTILqU24r8FCcgg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/1071af80-cf40-4ba7-94f6-0b3b63ffec4c.jpg",
          },
          {
            type: "Yamaha A14",
            intro:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsum! ",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/no23MCPgTILqU24r8FCcgg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/1071af80-cf40-4ba7-94f6-0b3b63ffec4c.jpg",
          },
          {
            type: "Yamaha A16",
            intro:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, illo.",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/no23MCPgTILqU24r8FCcgg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/1071af80-cf40-4ba7-94f6-0b3b63ffec4c.jpg",
          },
        ],
        spotlight: [
          {
            type: "舞台追焦燈",
            intro: "Our average return on investments is 12.75%. Meanwhile",
            photo: "https://cf.shopee.tw/file/c5f83fcccbe6843433fecf4880aaf440",
          },
        ],
        truss: [
          {
            type: "方形骰",
            intro:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum? ",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/UT_q0bYGtviAlPoknL3TWg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD0zMDE7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/157d7981-3545-483a-864d-fd74db80a813.jpg",
          },
          {
            type: "45CM",
            intro: "LEORM is registered in Estonia and licensed  ",
            photo: "http://9iactive.com/wp-content/uploads/2021/03/images.jpg",
          },
          {
            type: "120CM",
            intro:
              "for acting as a financial organization. LEORM is a crowdfunding platform  ",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/no23MCPgTILqU24r8FCcgg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/1071af80-cf40-4ba7-94f6-0b3b63ffec4c.jpg",
          },
          {
            type: "200CM",
            intro:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, unde. ",
            photo:
              "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/441710/13194326_800.jpg",
          },
        ],
        microphone: [
          {
            type: "2支/組",
            intro:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, dolor. ",
            photo:
              "https://s.yimg.com/ut/api/res/1.2/nKBeBQ17UgrQj6Yr1P.2DQ--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTEwMDt3PTYwMA--/https://s.yimg.com/fy/5bb0/item/p0736202502219-item-4387xf4x0800x0800-m.jpg",
          },
          {
            type: "4支/組",
            intro:
              "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, labore ",
            photo: "https://cf.shopee.tw/file/209f1446f11b6d66f370e3d6bcec8c81",
          },
          {
            type: "6支/組",
            intro:
              "Osaka was broken as she served for the match in the second set, and a poor t",
            photo: "https://cf.shopee.tw/file/209f1446f11b6d66f370e3d6bcec8c81",
          },
          {
            type: "8支/組",
            intro:
              "The teenager could not contain her smile as she secured a fantastic win. ",
            photo: "https://cf.shopee.tw/file/209f1446f11b6d66f370e3d6bcec8c81",
          },
        ],
        instrument: [
          {
            type: "guitar",
            intro:
              "investors to enter into loan and investment contracts with Eur ",
            photo:
              "https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg",
          },
          {
            type: "keyboard",
            intro: "LEORM is registered in Estonia and licensed  ",
            photo:
              "https://www.bhphotovideo.com/images/images2500x2500/Yamaha_EZ220_EZ_220_61_key_Lighted_Key_839760.jpg",
          },
          {
            type: "drum",
            intro:
              "for acting as a financial organization. LEORM is a crowdfunding platform  ",
            photo:
              "https://static.roland.com/products/vad_series/images/vad506_main.jpg",
          },
          {
            type: "bass",
            intro:
              "Brickfunding platform has published an interview ",
            photo:
              "https://i4.momoshop.com.tw/1620854006/goodsimg/0008/771/162/spec/8771162_01_003_R_m.webp",
          },
          {
            type: "Saxphone",
            intro:
              "Brickfunding platform has published an interview about LEORM crowdf ",
            photo:
              "https://b.ecimg.tw/items/DMAFE4A90085WJ4/000001_1496476988.jpg",
          },
        ],
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
