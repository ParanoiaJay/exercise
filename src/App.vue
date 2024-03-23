<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: '',
  components: {
    // HelloWorld,
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
