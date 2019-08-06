<template>
    <Header id="Header">
        <h1>{{title}}</h1>
    </Header>
</template>

<script>
    export default {
        name:'header',
        props:{
            title:{
                type:String,
                default:'喵喵电影'
            }
        }
    }
</script>

<style scoped>
#Header{
    width: 100%;
    height: 50px;
    color: white;
    background: #f03d3f;
    border-bottom: 1px solid #f03d3f;
    position: relative;
}
    #Header h1{
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        font-weight: normal;
    }
    #Header i{
        position: absolute;
        left: 5px;
        top: 50%;
        margin-top: -13px;
        font-size: 26px;
    }
</style>