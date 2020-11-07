<template>
  <section class="section">
    <h1 class="title is-4">ประวัติการศึกษา</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-half" v-for="education in educations" v-bind:key="education.id">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img v-bind:src="`${education.url}`" v-bind:alt="`${education.education}`" />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-6">{{education.education}}</p>
                <p class="subtitle is-7">ปี {{ education.year}}</p>
                <p
                  class="education"
                  v-for="detail in education.details"
                  v-bind:key="detail.id"
                >{{detail.detail}}</p>
              </div>
            </div>
            <b-button
              type="is-primary is-fullwidth"
              @click="isImageModalActive = true,image(education.id)"
            >ทรานสคริป</b-button>
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
          <div class="has-text-centered has-text-white">ทรานสคริป</div>
        </template>
      </b-carousel>
    </b-modal>
  </section>
</template>
<style scoped>
.education {
  font-size: 10pt;
}
</style>
<script>
//const firebaseApp = require("../firebase.js");
export default {
  data() {
    return {
      isLoading: false,
      educations: [
        {
          id: 1,
          education: "ปริญญาตรี วิทยาศาสตรบัณฑิต",
          year: "2559 - 2563",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FNU.jpeg?alt=media&token=af879bfa-4425-4905-a9d4-7de8a8a6c43d",
          details: [
            {
              detail: "มหาวิทยาลัยนเรศวร"
            },
            {
              detail: "สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์"
            },
            {
              detail: "เกรียรตินิยมอันดับ 2 เกรดเฉลี่ย 3.36"
            }
          ]
        },
        {
          id: 2,
          education: "มัธยมศึกษา",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FKPP.jpeg?alt=media&token=daf987ab-d2d4-4b77-a44b-ee356445ef64",
          year: "2549 - 2556",
          details: [
            {
              detail: "โรงเรียนกำแพงเพชรพิทยาคม"
            },
            {
              detail: "สายวิทยาศาสตร์ - คณิตศาสตร์"
            },
            {
              detail: "เกรดเฉลี่ย 2.57"
            }
          ]
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
      if (id == 1) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FNuSuccess.jpeg?alt=media&token=0f11a90c-ca77-4d42-8f60-9418317c796e"
          },{
            title: "Slide 2",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FtranscriptNuEng.jpeg?alt=media&token=afc50cce-21f5-470f-9495-dd75b01337da"
          },
          {
            title: "Slide 3",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FtranscriptNuTh.jpeg?alt=media&token=fdb21eeb-ee90-4cea-a26a-1c6c9cee970a"
          }
        ];
        this.items = obj;
      } else if (id == 2) {
        const obj = [
          {
            title: "Slide 1",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FtranscriptKpp1.jpeg?alt=media&token=cdf23248-0737-4fd0-98a3-eae91bdfcb52"
          },
          {
            title: "Slide 2",
            image:
              "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/education%2FtranscriptKpp2.jpeg?alt=media&token=94779262-b535-4371-8ab2-c44e67702139"
          }
        ];
        this.items = obj;
      }
    }
  },
  mounted() {
    //this.isLoading = true;
    // firebaseApp.educationCollection.get().then(snapshot => {
    //   this.educations = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    //   this.isLoading = false;
    // });
    // firebaseApp.educationCollection.onSnapshot(
    //   docSnapshot => {
    //     this.educations = docSnapshot.docs.map(doc => ({
    //       id: doc.id,
    //       ...doc.data()
    //     }));
    //     this.isLoading = false;
    //   },
    //   err => {
    //     console.log(`Encountered error: ${err}`);
    //   }
    // );
  }
};
</script>