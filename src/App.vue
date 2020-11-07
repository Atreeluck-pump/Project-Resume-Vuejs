<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/education">Education</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/skill">Skill</router-link> |
      <router-link to="/ability">Ability</router-link>
    </div>

    <router-view />

    <footer id="footer" fixed-bottom>
      <div class="columns is-desktop">
        <div class="column">
          <b-button
            tag="a"
            href="mailto:atreeluck.s@gmail.com"
            type="is-text is-fullwidth"
            outlined
            rounded
          >Email : atreeluck.s@gmail.com</b-button>
          <b-button
            tag="a"
            href="https://www.facebook.com/sripeng"
            target="_blank"
            type="is-text is-fullwidth"
            outlined
            rounded
          >Facebook : Atreeluck</b-button>
          <b-button
            tag="a"
            href="tel:064-696-9799"
            type="is-text is-fullwidth"
            outlined
            rounded
          >Tel : 064-6969799</b-button>
          <b-button
            tag="a"
            href="https://line.me/ti/p/aHmYtlN2hZ#~"
            target="_blank"
            type="is-text is-fullwidth"
            outlined
            rounded
          >Line : sripeng</b-button>
          <b-button
            tag="a"
            href="https://firebasestorage.googleapis.com/v0/b/atreelucksripeng.appspot.com/o/Atreeluck-resume.pdf?alt=media&token=f6f97151-4e13-4c30-81b0-164f0a0485a3"
            target="_blank"
            type="is-text is-fullwidth"
            outlined
            rounded
          >Download : Resume</b-button>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  background-color: #c4d9e4;
  a {
    font-weight: bold;
    color: #27235c;

    &.router-link-exact-active {
      color: #d85555;
    }
  }
}
#footer {
  margin-top: 30px;
  padding: 30px;
  background-color: #c4d9e4;
}
</style>
<script>
export default {
  mounted() {
    this.$buefy.notification.open("แนะนำให้เปิดบน mobile browser!!");
  }
};
</script>