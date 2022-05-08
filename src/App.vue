<template>
  <GifscrollTest class="giff"/>
  <Menu/>
  <HelloWorld class="content" msg="Boje 1"/>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import GifscrollTest from './components/GifscrollTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Menu,
    GifscrollTest
  }
}
</script>

<style>
@font-face {
    font-family: "Jetbrains";
    src: url("./assets/fonts/JetBrainsMono-Regular.woff2") format('woff2'),
    url("./assets/fonts/JetBrainsMono-Regular.ttf") format('truetype');
}

.content {
  height: 70%;
}

.giff {
  height: 20%;
  width: 100%;
}

body {
  background-color: black;
  color: rgb(255, 255, 255);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Jetbrains';
  scrollbar-width: none;
}

::-webkit-scrollbar {
    display: none;
}
</style>
