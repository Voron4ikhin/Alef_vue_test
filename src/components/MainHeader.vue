<template>
    <header>
        <div class="header-image">
            <img src="@/assets/Logo_imi_horizontal.png" />
        </div>
        <div class="header-tabs">
            <router-link to="/edit">Форма</router-link>
            <router-link to="/">Превью</router-link>
        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
        }
    }
}
</script>
<style>
header {
    height: 76px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #f1f4f7 solid 1px;
}

.header-tabs {
    display: flex;
    justify-content: center;
    gap: 15px;

}

.header-image {
    position: absolute;
    left: 0;
}

.header-tabs a {
    text-decoration: none;
    color: #666;

}

.header-tabs a:hover{
    color: #01A7FD;
}
</style>