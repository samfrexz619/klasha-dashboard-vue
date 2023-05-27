<template>
  <span>
    <svg v-if="name === 'dashboard'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#dashboard" />
    </svg>
    <svg v-else-if="name === 'balances'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#balances" />
    </svg>
    <svg v-else-if="name === 'transactions'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#transc" />
    </svg>
    <svg v-else-if="name === 'analytics'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#analytics" />
    </svg>
    <svg v-else-if="name === 'marketing'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#mkt" />
    </svg>
    <svg v-else-if="name === 'exchange rate'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#rate" />
    </svg>
    <svg v-else-if="name === 'checkout'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#checkout" />
    </svg>
    <svg v-else-if="name === 'payment links'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#links" />
    </svg>
    <svg v-else-if="name === 'wire'" class="icon" width="24" height="24" viewBox="0 0 24 24">
      <use xlink:href="/sprite.svg#wire" />
    </svg>

  </span>
</template>

<script setup lang="ts">


defineProps<{
  name: string
}>()

// console.log(props);

</script>

