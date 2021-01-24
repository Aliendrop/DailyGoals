<template>
  <div>
    <div class="content wo-select">
      <slot name="header"></slot>
      <slot name="content"></slot>
    </div>
    <Background />
  </div>
</template>

<script>
import Background from '@/components/Background'

export default {
  name: 'DefaultLayout',
  components: {
    Background,
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
html {
  --cWhite: #fff;
  --cGrey: #bababa;
  --cBlue: #3121E6;
  --cLime: #BCFE2F;
  --cBlack: #020202;
  --cMadison: #2c3e50;
  --cAmber: #fcbd00;
  --cCerise: #e2306c;
}
body::-webkit-scrollbar {
  width: 15px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--cLime) var(--cWhite);
  background: var(--cBlack);

}
body::-webkit-scrollbar-track { background: var(--cWhite); }
body::-webkit-scrollbar-thumb {
  background-color: var(--cLime);
}
#app {
  width: calc(100vw - 15px);
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 33px;
  color: var(--cLime);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.content {
  width: 100%;
  position: relative;
  z-index: 100;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.wo-select {
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
</style>