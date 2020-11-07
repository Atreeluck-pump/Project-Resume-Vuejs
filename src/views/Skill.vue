<template>
  <section class="section">
    <h1 class="title is-4">ทักษะ</h1>
    <div class="columns is-multiline is-centered">
      <div class="column is-half" v-for="skill in skills" v-bind:key="skill.id">
        <div class="card">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img v-bind:src="`${skill.url}`" v-bind:alt="`${skill.skill}`" />
                </figure>
              </div>
              <div class="media-content">
                <div class="block">
                  <p class="title is-6">{{skill.position}}</p>
                  <b-progress
                    :value="skill.value"
                    type="is-success"
                    size="is-medium"
                    show-value
                  >{{skill.text}}</b-progress>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//const firebaseApp = require("../firebase.js");
export default {
  data() {
    return {
      isLoading: false,
      skills: [
        {
          position: "ภาษาไทย",
          text: "ยอดเยี่ยม",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fthai.jpeg?alt=media&token=7cf49a22-c818-4c95-bd31-ae8d4f4be23b",
          value: 95
        },
        {
          position: "ภาษาอังกฤษ",
          text: "พอใช้",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Feng.jpeg?alt=media&token=bdc61034-cae1-46d5-9592-191360605308",
          value: 65
        },
        {
          position: "Node js",
          text: "ยอดเยี่ยม",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fnodejs.jpeg?alt=media&token=2ed7b5c3-f216-4a61-9229-4cc44c7e5882",
          value: 90
        },
        {
          position: "JAVA",
          text: "ดี",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fjava.jpeg?alt=media&token=2b699fec-466c-4802-aff7-a6e2a8b28b9e",
          value: 80
        },
        {
          position: "JavaScript",
          text: "ยอดเยี่ยม",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fjavascript.jpeg?alt=media&token=37af5f53-b82f-4946-bd69-3800047c79db",
          value: 90
        },
        {
          position: "PHP",
          text: "ดี",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fphp.jpeg?alt=media&token=4674c719-556f-491b-b727-f7806f611006",
          value: 85
        },
        {
          position: "CSS",
          text: "ดี",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fcss.jpeg?alt=media&token=67e9cb31-2d35-4141-a7ae-5d405fb2f5df",
          value: 80
        },
        {
          position: "Kotlin",
          text: "พอใช้",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fkotlin.jpeg?alt=media&token=7c7e7ae9-fa28-45ca-81ec-ff304a5193ae",
          value: 75
        },
        {
          position: "SQL",
          text: "ยอดเยี่ยม",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fsql.jpeg?alt=media&token=8f1d9c80-b09b-479e-a581-9f5c80872b91",
          value: 90
        },
        {
          position: "NoSQL",
          text: "ยอดเยี่ยม",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fnosql.jpeg?alt=media&token=1054e35e-e46c-45e6-9b20-d6969d73c9f8",
          value: 95
        },
        {
          position: "Data mining",
          text: "พอใช้",
          url:
            "https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/skill%2Fdatamining.jpeg?alt=media&token=b190d6d3-8fc1-4591-8750-78e28627f6cb",
          value: 70
        }
      ]
    };
  }
};
</script>

