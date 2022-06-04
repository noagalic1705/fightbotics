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
        <h1 class="sponz">Sponzori</h1>
        <div class="sponz">
            <a href="https://www.fsb.unizg.hr/index.php?fsbonline"><img class="sponzel" src="../assets/fsb.png" alt="fsb"></a>
            <a href="https://www.hep.hr/"><img class="sponzel" src="../assets/hep.png" alt="hep"></a>
            <a href="https://radiona.org/"><img class="sponzel" src="../assets/radiona.png" alt="makerspace"></a>
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
    font-size: 1.75vh;
    color: rgb(195, 145, 91);
}

.Br {
    font-size: 1.75vh;
    font-style: italic;
    color: rgb(37, 102, 202);
}
.kont {
    margin-top: 0h;
    margin-bottom: 5vh;
}
.sponz {
        width: 100%;
        text-align: center;
        font-size: 1.75vh;
    }
.sponzel {
    margin-top: 2vh;
        width: 20%;
        margin-left: 2vh;
        margin-right: 2vh;
        font-size: 1.75vh;
    }

.boja {
    color: rgb(78, 201, 162);
}

.imeKo{
    font-size: 1.75vh;
}

</style>
