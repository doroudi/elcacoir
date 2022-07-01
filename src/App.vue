<template>
  <div id="app">
    <loading></loading>
    <home-page></home-page>
  </div>
</template>

<script>
import "./assets/fonts/shabnam/css/shabnam.css";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import HomePage from "./Pages/Home/HomePage.vue";
import Loading from './components/app-loading.vue';
export default {
  name: "App",
  components: {
    HomePage,
    Loading
  },
  mounted() {
    setTimeout(() => {
      document.querySelector("body").classList.add("loaded");
    }, 4000)
  }
};
</script>

<style lang="scss">
@import './assets/styles/style.scss';
</style>
