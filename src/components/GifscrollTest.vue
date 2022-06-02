<template>
    <div id="naslov">
        <!-- <div id="nasEL1">
            <video src="../assets/gifek.mp4" id="v0" autoplay loop type="video/mp4">
            </video>
        </div> -->
         <div id="nasEL2">
            <div class="container">
                <div class="glitch botics" data-text="FIGHTBOTICS">FIGHTBOTICS</div>
                
                </div>
        </div> 
    </div>
</template>

<style lang="scss" scoped>
#naslov {
    overflow: hidden;
    width: 100%;
    display: table;
    overflow-x: hidden;
}
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


@mixin glitchCopy { 
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
}

.glitch {
	position: relative;
	color: white;
	font-size: 6vw;
  letter-spacing: 0.3em;
	animation: glitch-skew 1s infinite linear alternate-reverse;
	
	&::before{
		@include glitchCopy;
		left: 2px;

		text-shadow: -2px 0 #ff00c1;

		clip: rect(44px, 450px, 56px, 0);

		animation: glitch-anim 5s infinite linear alternate-reverse;
	}
	
	&::after {
		@include glitchCopy;
		left: -2px;
		text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
		animation: glitch-anim2 1s infinite linear alternate-reverse;
	}
}


@keyframes glitch-anim {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}


@keyframes glitch-anim2 {
  $steps: 20;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      clip: rect(random(100)+px, 9999px, random(100)+px, 0);
			transform: skew((random(100) / 100) + deg);
    }
  }
}


@keyframes glitch-skew {
  $steps: 10;
  @for $i from 0 through $steps {
    #{percentage($i*(1/$steps))} {
      transform: skew((random(10) - 5) + deg);
    }
  }
}

@media screen and (max-width: 1000px) {
  .glitch {
    font-size: 10vw;
  }
}

</style>

<script>

export default ({
    name: 'GifscrollTest'
})
</script>
