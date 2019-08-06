<template>
    <div class="movie" >
        <Header title="喵喵电影"/>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_switch">
                    <span>大连</span><i class="el-icon-location"></i>
                </router-link>
                <div class="hot_switch">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot_item">正在热播</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_city">
                    <i class="el-icon-search"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <TabBar />
    </div>
</template>

<script>
    import Header from '../../components/Header/index';
    import TabBar from '../../components/TabBar/index';
    export default {
        name: "movie",
        components:{
            Header,
            TabBar
        }
    }
</script>

<style scoped>
 #content .movie_menu{
     width: 100%;
     height: 45%;
     border-bottom: 1px solid #e6e6e6;
     display: flex;
     justify-content: center;
 }
    .movie_menu .city_switch{
        margin-left: 20px;
        height: 100%;
        line-height: 45px;
    }
 .movie_menu .city_switch.active{
     color: #ef4238;
     border-bottom: 2px solid #ef4238;
 }
 .movie_menu .city_switch.router-link-active{
     color: #ef4238;
     border-bottom: 2px solid #ef4238;
 }
    .movie_menu .hot_switch{
        display: flex;
        height: 100%;
        line-height: 45px;
    }
    .movie_menu .hot_item{
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
    }
 .movie_menu .hot_item.active{
     color: #ef4238;
     border-bottom: 2px solid #ef4238;
 }
 .movie_menu .hot_item.router-link-active{
     color: #ef4238;
     border-bottom: 2px solid #ef4238;
 }
    .movie_menu .search_city{
        margin-right: 20px;
        height: 100%;
        line-height: 45px;
    }
 .movie_menu .search_city.active{
     color: #ef4238;
     border-bottom: 2px solid #ef4238;
 }
 .movie_menu .search_city.router-link-active{
     color: #ef4238;
     border-bottom: 2px solid #ef4238;
 }
 .movie_menu .search_entry i{
     font-size: 12px;
     color: red;
 }

</style>