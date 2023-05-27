<template>
  <header class="sticky top-0 border-b border-[#EDEDED] bg-white z-40">
    <div class="h-[9vh] flex items-center">
      <p :class="[screen ? 'hidden' : 'block']">test</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, onUnmounted } from 'vue';

const screenSize = ref(window.innerWidth)

const handleResize =()=> {
   screenSize.value = window.innerWidth
}

onMounted(()=> {
  window.addEventListener('resize', handleResize)
})

onUnmounted(()=> {
  window.removeEventListener('resize', handleResize)
})

const screen = computed(()=> {
  return screenSize.value < 768
})
</script>

<style scoped>

</style>