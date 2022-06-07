

<template>
  <GifscrollTest class="giff"/>
  <div class="menu">
        <router-link style="text-decoration: none; color: inherit;" to="/" class="menuEl">
            Home
        </router-link>
        <router-link to="/pravilnik" style="text-decoration: none; color: inherit;" class="menuEl">
            Pravilnik
        </router-link>
        <router-link to="/kontakt" style="text-decoration: none; color: inherit;" class="menuEl">
            Kontakt
        </router-link>
    </div>
    <video src="./assets/gifek.mp4" id="v0" muted autoplay loop type="video/mp4">
            </video>
    <div id="nasEL1">
            
        </div>
    <router-view />
    <footer>
      <small>Copyright &copy; 2022 FightBotics, Author: Noa Galić<br></small>
      <small> v1.0</small>
    </footer>

</template>

<script>
import GifscrollTest from './components/GifscrollTest.vue'

export default {
  components: {
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

.giff {
  height: 20%;
  width: 100%;
}

body {
  background-color: black;
  color: rgb(212, 212, 212);
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

#nasEL1 {
  top: 20%;
  position: absolute;
  z-index: -1;
    vertical-align: middle;
    text-align: center;
    width: 100%;

}



#v0 {
  opacity: 1;
    width: 60%;
}
    .menu {
      margin-top: 2vh;
        width: 100%;
        display: flex;
        justify-content: space-around;
        border-bottom: 2px solid rgba(58, 58, 58, 0.774);
        
    }
    .menuEl {
        display: table-cell;
        font-size: 3vh;
    }

@media screen and (max-width: 1000px) {
  .menu {
    margin-top: 5vh;
  }
  #nasEL1 {
    position: fixed;
    top: 30%;
  }
  #v0 {
    width: 80%;
  }
}

footer {
  border-top: 2px solid rgba(58, 58, 58, 0.774);
  max-height: 5%;
  bottom: 0px;
}
</style>
