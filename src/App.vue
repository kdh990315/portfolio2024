<template>
  <router-view></router-view>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import MainPage from './pages/MainPage.vue';

export default {
  components: {
    MainPage,
    HeaderSection,
  }
}
</script>


<style>
</style>
