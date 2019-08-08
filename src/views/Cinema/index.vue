<template>
    <div id="main" >
        <Header title="喵喵影院" />
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 <i class="el-icon-caret-bottom"></i>
                </div>
                <div class="brand_switch">
                    品牌 <i class="el-icon-caret-bottom"></i>
                </div>
                <div class="feature_switch">
                    特色 <i class="el-icon-caret-bottom"></i>
                </div>
            </div>
            <CiList/>
        </div>
        <TabBar />
    </div>
</template>

<script>
    import Header from "../../components/Header/index";
    import TabBar from "../../components/TabBar/index";
    import CiList from "@/components/CiList"
    export default {
        name: "cinema",
        components: {Header,TabBar,CiList}
    }
</script>

<style scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
</style>