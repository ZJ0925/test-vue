<!--寫HTML結構-->
<template>
    <div class="preson">  <!--組件結構-->
        <h2>這台車子是{{car.brand}}，車款是{{car.type}}，顏色是{{car.color}},價錢是{{car.price}}萬</h2>
        <button @click="changeColor">變色</button>
    </div>
</template>


<script setup name="preson">
    import {reactive} from 'vue';
    //數據
    let car = reactive({brand:'BMW', type:'X5', color:'黑色',price:100});  //定義變數

    function changeColor(){
        car.color = '紅色';
        car.price = "130";//reactive不在乎資料類型
    }
</script>

<!--樣式結構-->
<style>
    .preson{
        background: skyblue;
        box-shadow: 0 0 10px;
        border-radius: 10px;
        padding: 10px;
    }
    button{
        margin: 10px;
    }
</style>