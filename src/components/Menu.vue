<template>
    <div class="menu">
        <div class="menuEl">
            Home
        </div>
        <div class="menuEl">
            Pravilnik
        </div>
        <div class="menuEl">
            O nama
        </div>
        <div class="menuEl">
            Kontakt
        </div>
        <div class="menuEl">
            Kontakt
        </div>
    </div>
</template>

<script>
export default ({
    name: 'Menu'
})
</script>

<style scoped>
    .menu {
        margin-top: 4vh;
        background: black;
        width: 100%;
        display: table;
        border-top: 2px solid rgba(58, 58, 58, 0.774);
        
    }

    .menuEl {
        display: table-cell;
        font-size: 2vh;
    }

</style>