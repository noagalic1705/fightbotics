<template>
  <div class="hello">
    <h1>
      <span class="var">var </span>
      <span class="ime">FightBotics</span>
      <span class="dvot">:</span>
      <span class="tip"> string</span>
      <span class="jedn"> =</span>
      <span class="cont"> "Prve Studentske Borbe Robota"</span>
      <span class="semi">;</span>
    </h1>
    <br>
    <p class="tekst">
      je pilot projekt, koji kao prvi takve vrste u Hrvatskoj spaja dva genijalna koncepta- borbe robota i cyberpunk kulturu. Fightbotics okuplja studente STEM područja, srednjoškolce, hobiste robotike kao i tvrtke u natjecanju izrade i borbi robota. 
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  height: 10000px;
  text-align: left;
  margin-top: 30vh;
}
h3 {
  margin: 40px 0 0;
}

.var {
  color: rgb(37, 102, 202);
}

.ime{
  color: rgb(156, 220, 254);
}

.dvot {
  color: white;
}

.tip {
  color: rgb(78, 201, 162);
}

.jedn {
  color: white;
}

.cont {
  color: rgb(195, 145, 91);
}

.semi {
  color: white;
}

.tekst {
  font-size: 3vh;
  width: 50%;
  color: rgb(212, 212, 212);
}
</style>
