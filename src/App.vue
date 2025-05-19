<!--寫HTML結構-->
<template>
    <Preson/>

</template>

<!--腳本結構-->
<script>
    import Preson from './Componets/preson.vue';  //導入Componets
    export default{
        name:'App',  //組件名
        components:{Preson}  //注入Componets
    }
</script>