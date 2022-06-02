<template>
  <div class="hello">
    <div class="par1">
      <p class="naslov">
        <span class="var">var </span>
        <span class="ime">FightBotics</span>
        <span class="dvot">:</span>
        <span class="tip"> string</span>
        <span class="jedn"> =</span>
        <span class="cont"> "Prve Studentske Borbe Robota"</span>
        <span class="semi">;</span>
      </p>
      <br>
      <p class="tekst">
        <span class="ime">FightBotics</span> pilot projekt, koji kao prvi takve vrste u Hrvatskoj spaja dva genijalna koncepta- borbe robota i cyberpunk kulturu. <span class="ime">FightBotics</span> okuplja studente STEM područja, srednjoškolce, hobiste robotike kao i tvrtke u natjecanju izrade i borbi robota. 
      </p>
    </div>
    <div class="par2">
      <p class="naslov">
      <span class="var">const </span>
        <span class="ime">Odkud_Pare</span>
        <span class="dvot">:</span>
        <span class="tip"> string</span>
        <span class="jedn"> =</span>
        <span class="cont"> "Ima se može se"</span>
        <span class="semi">;</span>
        </p>
      <p class="tekst">
      U suradnji s <a style="text-decoration: none; color: rgb(156, 220, 254);" href="https://radiona.org/">Radionom-Makerspace Zagreb</a> i <a style="text-decoration: none; color: rgb(156, 220, 254);" href="https://www.fsb.unizg.hr/">FSB-om</a> kroz uvodna predavanja <span class="cont">(dostupna za sve prijavljene)</span>
      kao i praktične radionice <span class="cont">(dostupne samo za studentske timove)</span> studenti podijeljeni u vlastite
      timove imaju priliku naučiti kako dizajnirati i sklopiti složen robotički sustav kao što je borbeni robot.
      Budući da je projekt studentskoga karaktera samo će studentski timovi dobiti financijsku potporu u komponentama + usluge laserskoga rezanja i 3d printanja za izradu svojih mašina za uništavanje.
      </p>
    </div>
    <div class="par2">
      <p class="naslov">
      <span class="var">let </span>
        <span class="ime">Gdje_I_Kad</span>
        <span class="dvot">:</span>
        <span class="tip"> string</span>
        <span class="jedn"> =</span>
        <span class="cont"> "Uskoro"</span>
        <span class="semi">;</span>
        </p>
      <p class="tekst">
        U listopadu 2022. timovi će imati priliku pokazati svoje robote i upogoniti ih na jedinstvenom događaju u srcu najvećega zagrebačkoga studentskoga doma „Stjepan Radić“, 
        u SKUC Pauk dvorani. Na glavnom jednodnevnom događanju možete očekivati frcanje metalnih iskrica, vatru i eksplozije dok se roboti bore u kavezu.
         Uz boje i zvukove cyberpunka moći ćete uživati i u dobrom pivu, kokicama, igranju PS2 kao i razgovoru s natjecateljskim timovima.
        Upad na event je besplatan i otvoren za sve gledatelje! 
        Masene granice, pravila bodovanja kao i zabranjena oružja možete pronjuškati u našem <router-link to="/pravilnik" style="text-decoration: none; color: rgb(78, 201, 162);">pravilniku</router-link>. Ako ste zainteresirani,
        na <a href="https://forms.gle/492AtuJuv8UrGdSw7" class="tip pravo">ovome linku</a> možete se prijaviti na uvodno predavanje.

      </p>
    </div>
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


.naslov {
  font-size: 3.5vh;
}
.hello {
  text-align: left;
  margin-top: 5vh;
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
  width: 50%;
  font-size: 2vh;
  color: rgb(212, 212, 212);
}

.par2 {
  margin-top: 12vh;
}

@media screen and (max-width: 1000px) {
  .tekst {
    width: 100%;
  }
}

</style>
