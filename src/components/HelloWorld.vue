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
      <!-- br -->

      <!-- br -->
      <p class="tekst">
        <span class="ime">FightBotics</span> studentski je pilot-projekt, koji kao prvi takve vrste u Hrvatskoj spaja dva zanimljiva koncepta- borbe robota i cyberpunk kulturu. <span class="ime">FightBotics</span> okuplja studente STEM područja, srednjoškolce, hobiste kao i tvrtke u natjecanju, izradi i borbi robota.
      </p>
    </div>
    <div class="par2">
      <p class="naslov">
      <span class="var">const </span>
        <span class="ime">Tko? Kako?</span>
        <span class="dvot">:</span>
        <span class="tip"> string</span>
        <span class="jedn"> =</span>
        <span class="cont"> "lemilicama_i_čekićima"</span>
        <span class="semi">;</span>
        </p>
      <p class="tekst">
      U suradnji s <a style="text-decoration: none; color: rgb(156, 220, 254);" href="https://radiona.org/">Radionom-Makerspace Zagreb</a>, te <a style="text-decoration: none; color: rgb(156, 220, 254);" href="https://www.fsb.unizg.hr/">Fakultetom Strojarstva i Brodogradnje</a>, kroz Uvodno predavanje <span class="cont">(dostupna za sve prijavljene)</span>te i praktične radionice <span class="cont">(dostupne samo za studentske timove)</span> studenti podijeljeni u vlastite timove imaju priliku naučiti kako dizajnirati i sklopiti složen robotski sustav. Budući da je projekt studentskoga karaktera, samo će studentski timovi dobiti potpunu subvenciju za komponente, usluge laserskog rezanja metala, te 3D printanja u svrhu izrade zamišljenog borbenog robota.
Link za prijavu na Uvodno predavanje možeš pronaći niže u tekstu!

      </p>
    </div>
    <div class="par2">
      <p class="naslov">
      <span class="var">let </span>
        <span class="ime">Gdje_I_Kad</span>
        <span class="dvot">:</span>
        <span class="tip"> string</span>
        <span class="jedn"> =</span>
        <span class="cont"> "Na_poznatome_mjestu"</span>
        <span class="semi">;</span>
        </p>
      <p class="tekst">
        U prostorijama Fakulteta strojarstva i brodogradnje, 18. lipnja, bit će održano Uvodno predavanje za sve zainteresirane sudionike, na koje se možete prijaviti na sljedećem linku:<a href="https://forms.gle/492AtuJuv8UrGdSw7" class="tip pravo"> prijave_na_predavanje</a>. 
Uvodno predavanje služi za upoznavanje zainteresiranih studenata s Pravilnikom, postupkom prijave, te cjelokupnim programom Fightbotics. Prisutni će imati priliku upoznati i člana žirija, te mentore koji će ih voditi kroz sami postupak sklapanje i izrade robota. 

U listopadu 2022. natjecateljski timovi imat će priliku pokazati svoje robote i upogoniti ih na jedinstvenom događaju, u srcu najvećeg zagrebačkog studentskoga doma „ SD Stjepan Radić“, u SKUC Pauk dvorani. Na glavnom jednodnevnom događanju možete očekivati frcanje metalnih iskrica, vatru i eksplozije dok se roboti bore u custom made kavezu. Uz boje i zvukove cyberpunka imat ćete priliku uživati i u dobrom pivu, kokicama, igranju PS2 kao i razgovoru s natjecateljskim timovima. Događaj je otvorenog karaktera, te je dostupan za sve gledatelje! Masene granice, pravila bodovanja kao i zabranjena oružja možete pronjuškati u našem <router-link to="/pravilnik" style="text-decoration: none; color: rgb(78, 201, 162);">pravilniku</router-link>. 


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
  margin-top: 0;
  font-size: 3vh;
}
.hello {
  text-align: left;
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
  font-size: 1.8vh;
  color: #cdcdcd;
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
