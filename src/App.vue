<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue';
import DashboardLayout from './components/layouts/DashboardLayout.vue';
import Empty from './components/layouts/Empty.vue'


const route = useRoute()

const initialRoute = computed(()=> {
  return route.name === null
})

const layoutComponent = computed(()=> {
  let currentLayout = null
  const routeLayout = route.meta.layout
  switch (routeLayout) {
    case 'dashboard': {
      currentLayout = DashboardLayout
      break
    }
    case 'empty': {
      currentLayout = Empty
      break
    }
    default:
      currentLayout = ''
  }
  return currentLayout
})
</script>

<template>
  <main>
    <component :is="layoutComponent" v-if="!initialRoute">
      <RouterView  />
    </component>
  </main>
</template>


