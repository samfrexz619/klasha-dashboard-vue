<template>
  <main class="flex justify-between">
    <aside>
      <Sidenav />
    </aside>
    <section class="w-top">
      <div>
        <TopNav  />
      </div>
      <main class="">
        <RouterView  />
      </main>
    </section>
  </main>
</template>

<script setup lang="ts">
import Sidenav from '../Sidenav.vue';
import TopNav from '../TopNav.vue';





</script>

<style scoped lang="scss">
</style>