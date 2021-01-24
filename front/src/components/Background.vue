<template>
  <div class="bottom-bg" />
</template>

<script>
export default {
  name: 'Background',
}
</script>

<style>
.bottom-bg {
  background-image: url('../assets/bottom-logo.jpg');
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: contain;
  width: 700px;
  height: 546px;
  max-width: 100%;
  max-height: 100%;
  left: 0;
  bottom:0%;
  position: fixed; 
}
</style>
