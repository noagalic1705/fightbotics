<template>
    <div>
        <p class="tekstt">
    Kako bismo osigurali fair-play borbe, svi natjecateljski timovi se moraju pridržavati našeg Pravilnika.
U Pravilniku su detaljno opisani: 

    <ul>
	<li>načina prijave i kriterija evaluacije prijava</li>
	<li>koja je dopuštena masa i napon vašeg borbenog robota</li>
	<li>oružja koja možete i ne možete koristiti :)</li>
	<li>način bodovanja borbi</li>
    </ul>
    Pravilnik u PDF-u možete downloadati ovdje: <a href="../assets/pravilnik.pdf" download class="pravil">FightBotics Pravilnik</a>
    </p>
    </div>
</template>

<script>

export default {
  name: 'Pravilnik',
}
</script>

<style scoped>

.pravil {
    text-decoration: none;
    color: rgb(78, 201, 162);
}
li {
    margin-top: 3vh;
}
ul {
    text-align: left;
    margin-top: 5vh;
    margin-bottom: 10vh;
}
.tekstt {
    text-align: left;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 1.75vh;
    color: #cdcdcd;
}

@media screen and (max-width: 1000px) {
  .tekstt {
    margin-left: 0px;
    margin-right: 0px;
  }
}
</style>