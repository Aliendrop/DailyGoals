<template>
  <div id="app" v-cloak>
    <Index />
  </div>
</template>

<script>
import Index from '@/pages/Index'

export default {
  name: 'App',
  components: {
    Index,
  }
}
</script>

<style>
  [v-cloak] {
    display: none;
  }
</style>