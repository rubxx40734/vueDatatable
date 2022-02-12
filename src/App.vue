<template>
  <div class="container">
     <JqueryTable></JqueryTable>
  </div>
  <!-- Button trigger modal -->
  <router-view/>
</template>

<style lang="scss">
@import "./assets/all.scss";
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Roboto:ital,wght@0,500;1,900&family=Rubik&family=Zen+Kurenaido&display=swap');
// font-family: 'Fredoka One', cursive;
// font-family: 'Roboto', sans-serif;
// font-family: 'Rubik', sans-serif;
// font-family: 'Zen Kurenaido', sans-serif;
</style>

<script>
import JqueryTable from './components/Jquery.vue'
import 'bootstrap/dist/js/bootstrap.bundle'
export default {
  name: 'App',
  components: { JqueryTable }
}
</script>
