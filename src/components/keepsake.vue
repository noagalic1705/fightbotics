<template>
  <div class="gifscroll">
      <video src="../assets/gifek.mp4" id="v0" tabindex="0" autobuffer preload></video>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";


onMounted(() => {
     var vid = document.getElementById('v0');

    vid.pause();
    
    window.onscroll = function(){
        vid.pause();
    };

    setInterval(function(){
        vid.currentTime = window.pageYOffset/400;
    }, 40);
});

export default ({
    name: 'GifscrollTest'
})
</script>
