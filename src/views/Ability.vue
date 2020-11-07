<template>
  <section class="section">
    <h1 class="title is-4">ความสามารถ</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-half" v-for="abilitie in abilities" v-bind:key="abilitie.id">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img v-bind:src="`${abilitie.url}`" v-bind:alt="`${abilitie.abilitie}`" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-6">{{abilitie.position}}</p>
                <p
                  class="work"
                  v-for="detail in abilitie.details"
                  v-bind:key="detail.id"
                >{{detail.work}}</p>
              </div>
            </div>
            <b-button v-if="abilitie.image"
              type="is-primary is-fullwidth"
              @click="isImageModalActive = true,image(abilitie.id)"
            >รายละเอียด</b-button>
          </div>
        </div>
      </div>
    </div>

    <b-modal :active.sync="isImageModalActive">
      <b-carousel :autoplay="false" with-carousel-list :indicator="false" :overlay="gallery">
        <b-carousel-item v-for="(item, i) in items" :key="i">
          <figure @click="switchGallery(true)" class="image">
            <img :src="item.image" />
          </figure>
        </b-carousel-item>
        <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large" />
        <template slot="list" slot-scope="props">
          <b-carousel-list
            v-model="props.active"
            :data="items"
            :config="al"
            :refresh="gallery"
            @switch="props.switch($event, false)"
            as-indicator
          />
        </template>
        <template slot="overlay">
          <div class="has-text-centered has-text-white">ตัวอย่างงาน</div>
        </template>
      </b-carousel>
    </b-modal>
  </section>
</template>
<style scoped>
.work {
  font-size: 10pt;
}
</style>
<script>
//const firebaseApp = require("../firebase.js");
export default {
  data() {
    return {
      isLoading: false,
      abilities: [
        {
          id: 1,
          position: "Line Chatbot",
          image : true,
          details: [
            {
              work: "พัฒนาแชทบอทบันทึกพฤติกรรมการบริโภคอาหารให้กับ NECTEC"
            },
            {
              work: "พัฒนาแชทบอทค้นหาคลินิกในจังหวัดพิษณุโลก"
            },
            {
              work: "พัฒนาแชทบอทจองคิวร้านชาบู"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fline.jpeg?alt=media&token=a185c924-59b0-411a-bece-540a2c2c7b91"
        },
        {
          id: 2,
          position: "Firebase",
          image : true,
          details: [
            {
              work: "พัฒนาไลน์แชทบอทโดยใช้ Cloud fuctions เป็น Webhook"
            },
            {
              work: "พัฒนาเว็บไซต์โดยใช้ Hosting"
            },
            {
              work: "พัฒนาระบบลงทะเบียนของเว็บไซต์โดยใช้ Authentication"
            },
            {
              work: "พัฒนาฐานข้อมูลแบบ NoSQL โดยใช้ Firestore"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Ffirebase.jpeg?alt=media&token=48ee47cf-2412-48b0-b166-ef470d4e7378"
        },
        {
          id: 3,
          position: "Vue.js",
          image : false,
          details: [
            {
              work: "พัฒนา Font end ของเว็บไซต์ Portfolio"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fvue.jpeg?alt=media&token=78944907-e87b-440d-a2ce-d5c8e42e63a1"
        },
        {
          id: 4,
          position: "Laravel",
          image : true,
          details: [
            {
              work:
                "พัฒนาแอพพลิเคชันยืม-คืนวิทยานิพนธ์ โดยใช้ Laravel และเชื่อมต่อฐานข้อมูล SQL"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Flaravel.jpeg?alt=media&token=aade25d0-c32b-4ab1-977a-ef60d4d92051"
        },
        {
          id: 5,
          position: "Andriod application",
          image : true,
          details: [
            {
              work: "พัฒนา Application Android ทำนายสมาชิกวง Blackpink ที่คาดว่าจะชื่นชอบด้วยภาษา Kotlin และเทคนิค Data mining"
            },
            {
              work: "พัฒนา Application Android บันทึกตารางเรียน ด้วยภาษา Kotlin"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fandroid.jpeg?alt=media&token=84e560fa-48a5-4c55-b041-1207be1a562e"
        },
        {
          id: 6,
          position: "Web application",
          image : false,
          details: [
            {
              work: "พัฒนาเว็บแอพพลิเคชันยืม-คืนวิทยานิพนธ์ เชื่อมต่อฐานข้อมูล SQL"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fwebapp.jpeg?alt=media&token=9004e537-a9a1-42b9-8524-5c1aa9da762e"
        },
        {
          id: 7,
          position: "วิเคราะห์ข้อมูลด้วยเทคนิค Datamining",
          image : false,
          details: [
            {
              work: "วิเคราะห์ข้อมูลด้วย Decision tree"
            },
            {
              work: "วิเคราะห์ข้อมูลด้วย Neural Network"
            }
          ],
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fdatamining.jpeg?alt=media&token=b190d6d3-8fc1-4591-8750-78e28627f6cb"
        }
      ],

      isImageModalActive: false,
      isCardModalActive: false,
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 5,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6
          }
        }
      },
      items: []
    };
  },
  methods: {
    switchGallery(value) {
      this.gallery = value;
      if (value) {
        return document.documentElement.classList.add("is-clipped");
      } else {
        return document.documentElement.classList.remove("is-clipped");
      }
    },
    image(id) {
      if (id == 5) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.001.jpeg?alt=media&token=1015564e-4c6a-492e-8251-4920af9d6c43"
          },
          {
            title: "Slide /",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.002.jpeg?alt=media&token=860d8057-b1f1-4d8b-9356-bd4de0bff275"
          }
        ];
        this.items = obj;
      } else if (id == 1) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.003.jpeg?alt=media&token=a48e72b3-dcd6-4815-8b98-552f3c165d44"
          },
          {
            title: "Slide 2",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.004.jpeg?alt=media&token=b81b6aac-7ac2-4870-a783-e664b3460079"
          },
          {
            title: "Slide 3",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.005.jpeg?alt=media&token=80c03431-125f-4257-924e-a477e22f8810"
          },
          {
            title: "Slide 4",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.006.jpeg?alt=media&token=5edcb987-de12-475d-a5ff-15ec6a2c1d35"
          },
          {
            title: "Slide 5",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.007.jpeg?alt=media&token=ce2a9d41-8b66-4457-8567-59161cb601b1"
          }
        ];
        this.items = obj;
      }else if (id == 4) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.008.jpeg?alt=media&token=b56b1723-b53b-4a34-b2f9-8d282e09c144"
          },
          {
            title: "Slide 2",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.009.jpeg?alt=media&token=1896ced2-c925-4dc0-9663-0d65cc55395e"
          },
          {
            title: "Slide 3",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.010.jpeg?alt=media&token=a9573168-4798-4403-bb23-723e38a9a4d7"
          },
          {
            title: "Slide 4",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.011.jpeg?alt=media&token=843fc898-868f-4ead-aa5a-c8078e76ab4d"
          }
        ];
        this.items = obj;
      }else if (id == 2) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.012.jpeg?alt=media&token=b5aca6a9-2529-4a28-a01f-2bb62f1be372"
          },
          {
            title: "Slide 2",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.013.jpeg?alt=media&token=38cda4cc-6dd9-41b9-8ac3-6afda5f887ce"
          },
          {
            title: "Slide 3",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/ability%2Fability.014.jpeg?alt=media&token=4e7285c8-f2fa-478e-8ddc-358c5f360bf0"
          }
        ];
        this.items = obj;
      }
    }
  }
};
</script>

