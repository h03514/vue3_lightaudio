<template>
  <header>
    <nav class="navbar navbar-dark bg-dark text-center text-white">
      <h4 class="text-center">Equipment</h4>
    </nav>
  </header>
  <main>
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div
          class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark navLeftSide"
        >
          <div
            class="
              d-flex
              flex-column
              align-items-center align-items-sm-start
              px-3
              pt-2
              text-white
              min-vh-100
            "
          >
            <li class="nav-item">
              <a href="#" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i>
                <span class="ms-1 d-none d-sm-inline"></span>
              </a>
            </li>
            <a
              href="/"
              class="
                d-flex
                align-items-center
                pb-3
                mb-md-0
                me-md-auto
                text-white text-decoration-none
              "
            >
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul
              class="
                nav nav-pills
                flex-column
                mb-sm-auto mb-0
                align-items-center align-items-sm-start
              "
              id="menu"
            >
              <li>
                <a
                  href="#submenu1"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                  @click="typeSel"
                  vlaue="audio"
                >
                  <i class="fs-4 bi-speedometer2"></i>
                  <span class="ms-1 d-none d-sm-inline text-white"
                    >外場音響</span
                  >
                </a>
                <!-- <ul
                  class="collapse show nav flex-column ms-1"
                  id="submenu1"
                  data-bs-parent="#menu"
                >
                  <li class="w-100">
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Item</span> 1
                    </a>
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Item</span> 2
                    </a>
                  </li>
                </ul> -->
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link px-0 align-middle"
                  @click="typeSel"
                  value="spotlight"
                >
                  <i class="fs-4 bi-table"></i>
                  <span class="ms-1 d-none d-sm-inline text-white"
                    >Spot Light</span
                  ></a
                >
              </li>
              <li>
                <a
                  href="#submenu2"
                  data-bs-toggle="collapse"
                  class="nav-link px-0 align-middle"
                  @click="typeSel"
                  value="truss"
                >
                  <i class="fs-4 bi-bootstrap"></i>
                  <span class="ms-1 d-none d-sm-inline text-white"
                    >Truss</span
                  ></a
                >
                <!-- <ul
                  class="collapse nav flex-column ms-1"
                  id="submenu2"
                  data-bs-parent="#menu"
                >
                  <li class="w-100">
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Item</span> 1</a
                    >
                  </li>
                  <li>
                    <a href="#" class="nav-link px-0">
                      <span class="d-none d-sm-inline">Item</span> 2</a
                    >
                  </li>
                </ul> -->
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link px-0 align-middle"
                  @click="typeSel"
                  value="microphone"
                >
                  <i class="fs-4 bi-table"></i>
                  <span class="ms-1 d-none d-sm-inline text-white"
                    >麥克風組</span
                  ></a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link px-0 align-middle"
                  @click="typeSel"
                  value="instrument"
                >
                  <i class="fs-4 bi-table"></i>
                  <span class="ms-1 d-none d-sm-inline text-white"
                    >樂器</span
                  ></a
                >
              </li>
            </ul>
            <hr />
            <div class="dropdown pb-4">
              <a
                href="#"
                class="
                  d-flex
                  align-items-center
                  text-white text-decoration-none
                  dropdown-toggle
                "
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="sss"
                  width="30"
                  height="30"
                  class="rounded-circle"
                />
                <span class="d-none d-sm-inline mx-1">Mark</span>
              </a>
              <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col py-3">
          <div class="row">
            <div
              v-for="(item, index) in equipmentVal"
              :key="index"
              class="col-3 item"
            >
              <div class="itemDiv">
                <div class="img">
                  <img :src="item.photo" width="100" alt="" />
                </div>
                <h5>{{ item.type }}</h5>
                <p class="intro">{{ item.intro }}</p>
                <div class="itemPrice">
                  <div class="originPrice">原價: ${{ item.price }}</div>
                  <div>優惠價: ${{ item.salePrice }}</div>
                </div>
                <div class="buttonGroup">
                  <router-link to="/iteminfo"
                    ><button
                      class="btn btn-light moreInfo"
                      @click="showItemInfo(item)"
                    >
                      查看更多
                    </button></router-link
                  >
                  <button class="btn btn-secondary ms-5">加入購物車</button>
                </div>
              </div>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { reactive } from "@vue/reactivity";
import emitter from "../assets/js/mitt";

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
            price: "7500",
            salePrice: "7000",
          },
          {
            type: "Yamaha A14",
            intro:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, ipsum! ",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/no23MCPgTILqU24r8FCcgg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/1071af80-cf40-4ba7-94f6-0b3b63ffec4c.jpg",
            price: "9000",
            salePrice: "8500",
          },
          {
            type: "Yamaha A16",
            intro:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, illo.",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/no23MCPgTILqU24r8FCcgg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD00MDA7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/1071af80-cf40-4ba7-94f6-0b3b63ffec4c.jpg",
            price: "10500",
            salePrice: "10000",
          },
        ],
        spotlight: [
          {
            type: "舞台追焦燈",
            intro: "Our average return on investments is 12.75%. Meanwhile",
            photo: "https://cf.shopee.tw/file/c5f83fcccbe6843433fecf4880aaf440",
            price: "6000",
            salePrice: "5000",
          },
        ],
        truss: [
          {
            type: "方形骰",
            intro:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, illum? ",
            photo:
              "https://ct.yimg.com/xd/api/res/1.2/UT_q0bYGtviAlPoknL3TWg--/YXBwaWQ9eXR3YXVjdGlvbnNlcnZpY2U7aD0zMDE7cT04NTtyb3RhdGU9YXV0bzt3PTQwMA--/https://s.yimg.com/ob/image/157d7981-3545-483a-864d-fd74db80a813.jpg",
            price: "500",
            salePrice: "300",
          },
          {
            type: "45CM",
            intro: "LEORM is registered in Estonia and licensed  ",
            photo: "http://9iactive.com/wp-content/uploads/2021/03/images.jpg",
            price: "1000",
            salePrice: "800",
          },
          {
            type: "120CM",
            intro:
              "for acting as a financial organization. LEORM is a crowdfunding platform  ",
            photo: "http://9iactive.com/wp-content/uploads/2021/03/images.jpg",
            price: "1200",
            salePrice: "1000",
          },
          {
            type: "200CM",
            intro:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, unde. ",
            photo:
              "https://thumbs.static-thomann.de/thumb/orig/pics/bdb/441710/13194326_800.jpg",
            price: "2000",
            salePrice: "1600",
          },
        ],
        microphone: [
          {
            type: "2支/組",
            intro:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, dolor. ",
            photo:
              "https://s.yimg.com/ut/api/res/1.2/nKBeBQ17UgrQj6Yr1P.2DQ--~B/YXBwaWQ9eXR3bWFsbDtjYz0zMTUzNjAwMDtoPTYwMDtxPTEwMDt3PTYwMA--/https://s.yimg.com/fy/5bb0/item/p0736202502219-item-4387xf4x0800x0800-m.jpg",
            price: "1200",
            salePrice: "1000",
          },
          {
            type: "4支/組",
            intro:
              "orem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, labore ",
            photo: "https://cf.shopee.tw/file/209f1446f11b6d66f370e3d6bcec8c81",
            price: "2200",
            salePrice: "1800",
          },
          {
            type: "6支/組",
            intro:
              "Osaka was broken as she served for the match in the second set, and a poor t",
            photo: "https://cf.shopee.tw/file/209f1446f11b6d66f370e3d6bcec8c81",
            price: "3200",
            salePrice: "3000",
          },
          {
            type: "8支/組",
            intro:
              "The teenager could not contain her smile as she secured a fantastic win. ",
            photo: "https://cf.shopee.tw/file/209f1446f11b6d66f370e3d6bcec8c81",
            price: "4500",
            salePrice: "4000",
          },
        ],
        instrument: [
          {
            type: "guitar",
            intro:
              "investors to enter into loan and investment contracts with Eur ",
            photo:
              "https://d1aeri3ty3izns.cloudfront.net/media/23/235459/600/preview_4.jpg",
            price: "2500",
            salePrice: "2000",
          },
          {
            type: "keyboard",
            intro: "LEORM is registered in Estonia and licensed  ",
            photo:
              "https://www.bhphotovideo.com/images/images2500x2500/Yamaha_EZ220_EZ_220_61_key_Lighted_Key_839760.jpg",
            price: "4500",
            salePrice: "4000",
          },
          {
            type: "drum",
            intro:
              "for acting as a financial organization. LEORM is a crowdfunding platform  ",
            photo:
              "https://static.roland.com/products/vad_series/images/vad506_main.jpg",
            price: "5500",
            salePrice: "5000",
          },
          {
            type: "bass",
            intro: "Brickfunding platform has published an interview ",
            photo:
              "https://i4.momoshop.com.tw/1620854006/goodsimg/0008/771/162/spec/8771162_01_003_R_m.webp",
            price: "3000",
            salePrice: "2500",
          },
          {
            type: "Saxphone",
            intro:
              "Brickfunding platform has published an interview about LEORM crowdf ",
            photo:
              "https://b.ecimg.tw/items/DMAFE4A90085WJ4/000001_1496476988.jpg",
            price: "7000",
            salePrice: "6500",
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
  setup() {
    function showItemInfo(e) {
      console.log(e);
      emitter.emit("hello", reactive(e));
    }
    return { showItemInfo };
  },
};
</script>
