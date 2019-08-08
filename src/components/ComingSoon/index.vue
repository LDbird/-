<template>
    <div id="ComingSoon">
        <div class="comingSoon_body">
            <Loading v-if="isLoading"/>
            <Scroll>
                <ul>
                    <li v-for="item in comingList">
                        <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')" alt=""></div>
                        <div class="info_list">
                            <h2 @tap="handleToDetail(item.id)">{{item.nm}}</h2>
                            <p><span class="grade">{{item.wish}}</span>人想看</p>
                            <p>主演：{{item.star}}</p>
                            <p>{{item.showInfo}}</p>
                        </div>
                        <div class="btn_mall">
                            购票
                        </div>
                    </li>
                </ul>
            </Scroll>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                comingList:[],
                prevCityId:-1,
                isLoading:true
            }
        },
        methods:{
            handleToDetail(movieId){
                console.log(999999);
                this.$router.push('/movie/detail/2/'+movieId)
            },
        },
        activated() {
            var cityId = this.$store.state.city.id;
            if(this.prevCityId === cityId){
                return;
            }
            this.isLoading = true;

            this.axios.get('/api/movieComingList?cityId='+cityId).then((res)=>{
                var msg = res.data.msg;
                console.log(res);
                if(msg === 'ok'){
                    this.comingList = res.data.data.comingList;
                    this.isLoading = false;
                    this.prevCityId = cityId;
                }
            })
        }
    }
</script>

<style scoped>
    #content .comingSoon_body{ flex:1; overflow:auto;position: absolute;top: 0;bottom: 0;margin-top: 99px;width: 100%}
    .comingSoon_body{
        flex: 1;
        overflow: hidden;
    }
    .comingSoon_body ul{
        margin: 0 12px;
        overflow: hidden;
    }
    .comingSoon_body ul li{
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e6e6e6;
        padding-bottom: 10px;
    }
    .comingSoon_body .pic_show{
        width: 64px;
        height: 90px;
    }
    .comingSoon_body .pic_show img{
        width: 100%;
    }
    .comingSoon_body .info_list{
        margin-left: 10px;
        flex: 1;
        position: relative;
    }
    .comingSoon_body .info_list h2{
        font-size: 17px;
        line-height: 24px;
        width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .comingSoon_body .info_list .grade{
        font-weight: 700;
        color: #666;
        line-height: 22px;
        width: 200px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .comingSoon_body .info_list img{
        width: 50px;
        position: absolute;
        right: 10px;
        font-size: 15px;
    }
    .comingSoon_body  .btn_mall , .comingSoon_body .btn_mall{
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background: #f03d37;
        color: white;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
    }
    .comingSoon_body .btn_mall{
        background: #3c9fe6;
    }
</style>