<template>
    <div>
        <div class="kontakti">
            <div class="kont">
                <h2 class="imeKo">
                <span class="boja">Vedran Kocijan,</span> voditelj projekta (sponzori) 
                </h2>
                <p class="Kon">
                     vekikoc@gmail.com
                </p>
                <p class="Br">
                    +385 95 727 1254
                </p>
            </div>
            <div class="kont">
                <h2 class="imeKo">
                <span class="boja">Marta Vukoja,</span> voditeljica projekta (administracija, financije) 
                </h2>
                <p class="Kon">
                     vukojamarta@gmail.com
                </p>
                <p class="Br">
                    +385 92 378 2667
                </p>
            </div>
            <div class="kont">
                <h2 class="imeKo">
                <span class="boja">Dorian Erić,</span> voditelj projekta (pravilnik/tehnička rješenja) 
                </h2>
                <p class="Kon">
                     dorian.eric@gmail.com
                </p>
                <p class="Br">
                    +385 98 367 426
                </p>
            </div>
        </div>
        <h1>Sponzori</h1>
        <div class="sponz">
            <img class="sponzel" src="../assets/fsb.png" alt="fsb">
            <img class="sponzel" src="../assets/hep.png" alt="hep">
            <img class="sponzel" src="../assets/radiona.png" alt="makerspace">
        </div>
    </div>
</template>

<script>

export default {
  name: 'Kontakt',
}

</script>

<style scoped>

.Kon {
    font-size: 2.5vh;
    color: rgb(195, 145, 91);
}

.Br {
    font-size: 2.5vh;
    font-style: italic;
    color: rgb(37, 102, 202);
}
.kont {
    margin-top: 10vh;
    margin-bottom: 10vh;
}
.sponz {
        width: 100%;
        text-align: center;
        
    }
.sponzel {
    margin-top: 5vh;
        width: 30%;
        margin-left: 2vh;
        margin-right: 2vh;
    }

.boja {
    color: rgb(78, 201, 162);
}



</style>
