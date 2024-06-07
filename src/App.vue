<template>
  <router-view v-slot="{ Component, route }">
    <transition name="slide">
        <div :key="route.name" class="Im-root-element">
            <component :is="Component"></component>
        </div>
    </transition>
</router-view>
</template>

<script>
import MainPage from './pages/MainPage.vue';

export default {
  components: {
    MainPage,
  }
}
</script>


<style>

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-50%)
}

.slide-enter-to, .slide-leave-from {
  transform: translateX(0%);
  opacity: 1;
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(50%);
}

</style>
