<template functional>
  <div class="error-wrapper">
    <h3 class="error">Oops! {{ props.message }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Error',
}
</script>

<style scoped>
  .error {
    color: #e2306c;
  }
</style>
