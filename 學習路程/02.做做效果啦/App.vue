<!--寫HTML結構-->
<template>
    <div class="app">  <!--組件結構-->
        <h1>你好</h1>
        <Preson/>
    </div>
</template>

<!--腳本結構-->
<script>
    import Preson from './Componets/preson.vue';  //導入Componets
    export default{
        name:'App',  //組件名
        components:{Preson}  //注入Componets
    }
</script>

<!--樣式結構-->
<style>
    .app{
        background: #ddd;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 20px;
    }
</style>
