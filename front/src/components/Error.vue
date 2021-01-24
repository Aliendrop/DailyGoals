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
  .error-wrapper {
    padding: 0 20px 60px 20px;
  }
  .error {
    color: #e2306c;
  }
</style>
