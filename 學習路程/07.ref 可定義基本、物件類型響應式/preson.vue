<!--寫HTML結構-->
<template>
    <div class="preson">  <!--組件結構-->
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{ age }}</h2>
        <h2>類型:{{ type }}</h2>
        <button @click="changName">修改姓名</button>
        <button @click="changAge">修改年齡</button>
        <button @click="showMore">查看更多</button>
    </div>
</template>


<script setup>
    import {ref} from 'vue';//ref只能更改同類型
    //數據
    let name = ref('小明');  //定義變數
    let age = ref(18);
    let type = '人類';

    // 方法
    function changName(){  
        name.value = '小紅';
    }

    function changAge(){
        age.value += 1;

    }

    function changType(){
        // 這裡可以添加修改type的邏輯
    }

    function showMore(){  //查看更多
        name.value = '小明';
        age.value = 18;
        alert('姓名：' + name.value + ' 年齡：' + age.value + ' 類型：' + type.value);
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