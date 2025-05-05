<!--寫HTML結構-->
<template>
    <div class="preson">  <!--組件結構-->
        <h2>姓名:{{ name }}</h2>
        <h2>年齡:{{age}}</h2>
        <h2>屬性:{{type}}</h2>
        <button @click="changname">修改姓名</button>
        <button @click="changage">修改年齡</button>

        
        <button @click="showMore">查看更多</button>
    </div>
</template>

<!--腳本結構-->
<script>
    export default{
        name:'Preson',  //組件名
        data(){
            return{
                name:'ZJ',
                age:26,
                type:'fire',
                more:"帥哥"
            }
        },
        methods:{
            showMore(){
                alert(this.more)
            },
            changname(){
                this.name = 'YJ'
            },
            changage(){
                this.age = '18'
            }
        }
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
