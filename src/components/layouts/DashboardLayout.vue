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
  <MobileNav  />
</template>

<script setup lang="ts">
import MobileNav from '../MobileNav.vue';
import Sidenav from '../Sidenav.vue';
import TopNav from '../TopNav.vue';





</script>

<style scoped lang="scss">
</style>