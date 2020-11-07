<template>
  <section class="section">
    <h1 class="title is-4">ประสบการณ์</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-half" v-for="experience in experiences" v-bind:key="experience.id">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img v-bind:src="`${experience.url}`" v-bind:alt="`${experience.experience}`" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-6">{{experience.position}}</p>
                <p class="subtitle is-7">เดือน {{ experience.year}}</p>
                <p class="subtitle is-6">{{experience.mission}}</p>
                <p
                  class="experience"
                  v-for="detail in experience.details"
                  v-bind:key="detail.id"
                >{{detail.work}}</p>
              </div>
            </div>
            <b-button
              v-if="experience.isDetailActive"
              type="is-primary is-fullwidth"
              @click="isImageModalActive = true,image(experience.id)"
            >รายละเอียด</b-button>
            <!-- <b-button type="is-primary is-fullwidth" @click="order(pizza)">รายละเอียด</b-button> -->
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
          <div class="has-text-centered has-text-white">รายละเอียด</div>
        </template>
      </b-carousel>
    </b-modal>
  </section>
</template>
<style scoped>
.experience {
  font-size: 10pt;
}
</style>
<script>
//const firebaseApp = require("../firebase.js");
export default {
  data() {
    return {
      isLoading: false,
      experiences: [
        {
          id: 1,
          position: "นักศึกษาฝึกงาน NECTEC",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/experience%2Fnectec.jpeg?alt=media&token=4bb4431b-bf55-42f3-800f-a33654f01985",
          year: "ธันวาคม 2562 - มีนาคม 2563",
          details: [
            {
              work: "พัฒนาต้นแบบโปรแกรมวิเคราะห์และติดตามพฤติกรรมการบริโภค"
            }
          ],
          isDetailActive: true
        },
        {
          id: 2,
          position: "ผู้ช่วยให้คำแนะนำในงาน NUxLINE",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/experience%2Fnuxline.jpeg?alt=media&token=c9a680e4-5751-4553-a380-145f2eca14de",
          year: "มีนาคม 2563",
          details: [
            {
              work:
                "ให้คำปรึกษากับทีมที่เข้าร่วมแข่งงาน NUxLINE มหาวิทยาลัยนเรศวร"
            }
          ],
          isDetailActive: false
        }
      ],
      isImageModalActive: false,
      gallery: false,
      al: {
        hasGrayscale: false,
        itemsToShow: 5,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4
          },
          960: {
            hasGrayscale: false,
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
      console.log(id)
      if (id == 1) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/experience%2FexperienceNectec.jpeg?alt=media&token=308a8b5f-2edf-44f0-a9b5-ec0783740c7b"
          }
        ];
        this.items = obj;
      }
    }
  },
};
</script>