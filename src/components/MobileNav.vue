<template>
  <aside class="bg-modal lg:hidden fixed top-0 w-full bottom-0 flex z-50">
    <nav class="w-64 relative z-50 left-0 overflow-y-auto side__nav reset py-2 px-9 bg-[#FFFBF7]">
      <ul>
        <li class="py-10">
          <router-link :to="{name: 'dashboard'}">
            <svg width="84" height="26" viewBox="0 0 84 26">
              <use xlink:href="/sprite.svg#logo" />
            </svg>
          </router-link>
        </li>
        <h3 class="my-5 text-text">Main page</h3>
        <li  v-for="link in main_page.main_page" :key="link.id">
          <router-link :to="link.path" class="flex py-3 gap-x-3 capitalize">
            <LinkIcons :name="link.name" />
            {{ link.name }}
          </router-link>
        </li>
        <h3 class="my-5 text-text">Accept payment</h3>
        <li v-for="link in main_page.accept_payment" :key="link.id">
          <router-link :to="link.path" class="flex py-3 gap-x-3 capitalize">
            <LinkIcons :name="link.name" />
            {{ link.name }}
          </router-link>
        </li>
        <h3 class="my-5 text-text">Send Payment</h3>
        <li v-for="link in main_page.send_payment" :key="link.id">
          <router-link :to="link.path" class="flex py-3 gap-x-3 capitalize">
            <LinkIcons :name="link.name" />
            {{ link.name }}
          </router-link>
        </li>
        <li></li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { navItems } from '@/data'; 
import LinkIcons from './LinkIcons.vue';


const [ main_page ] = navItems 

</script>

<style scoped>

</style>