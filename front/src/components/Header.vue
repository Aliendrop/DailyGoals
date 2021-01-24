<template functional>
  <div class="header">
    <h1 class="title">{{props.header}}</h1>
  </div>
</template>

<style scoped>
.header {
  display: inline-block;
  margin: 20px;
  background: #020202;
}
.title {
  border: 7px solid;
  border-color: #fff;
  color: #fff;
  font-weight: 900;
  padding: 10px;
  margin: 0;
}
</style>
