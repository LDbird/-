<template>
    <div data-v-717db445="" class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="el-icon-search"></i>
                <input type="text" placeholder="请输入"></div>
        </div>
        <div class="search_result"><h3>电影/电视剧/综艺</h3>
            <ul></ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
    #content .search_body {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        overflow: auto;
    }
    .search_body .search_input {
        padding: 8px 10px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
    }
    .search_body .search_input_wrapper {
        padding: 0 10px;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
        background-color: #fff;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        line-height: 20px;
    }
    .search_body .search_input_wrapper i {
        font-size: 16px;
        padding: 4px 0;
    }
    .search_input_wrapper input {
        border: none;
        font-size: 13px;
        color: #333;
        padding: 4px 0;
        outline: none;
        margin-left: 5px;
        width: 100%;
    }
    .search_body .search_result h3 {
        font-size: 15px;
        color: #999;
        padding: 0px 15px 10px;
        border-bottom: 1px solid #e6e6e6;
    }
    ul, li {
        list-style: none;
    }
</style>