<template>

    <div>
        <p>方向:从上到下</p>
        <div class="item">
            <div class="container">
                <list-animation ref="listAnimation"
                              :TableLen="5" :listData='listdata'>
                    <template slot-scope="{item}">
                        <img style="height: 50px;width: 50px" :src="item.image"/>
                        <span>{{item.name}}</span>
                    </template>
                </list-animation>
            </div>
        </div>
    </div>

</template>

<script>
    import ListAnimation from "../lib/ListAnimation";
    export default {
        name: 'HelloWorld',
        components: {ListAnimation},
        props: {
            msg: String
        },
        data() {
            return {
                listdata:[],
            }
        },
        methods:{
            add(){
                let item = {
                    "id": Math.floor(Math.random() * 1000000000),
                    "image": "http://img15.3lian.com/2015/f2/8/d/" + Math.floor(Math.random() * 100) + ".jpg",
                    "name": "测试" + Math.floor(Math.random() * 1000)
                };
                this.$refs.listAnimation.add(item);
            },
            timer() {
                return setInterval(() => {
                    this.add();
                }, 3000)
            }
        },
        mounted(){
            this.timer();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item {
        padding-left: 10px;
        padding-right: 10px;
        display: inline-block;
    }

    .container {
        width: 200px;
        height:400px;
        border: 1px solid #46513c;
        line-height: 10px;
    }
    .blue{
        background:rgb(13, 49, 117);
    }
    .gray{
        background:#ddd;
    }
</style>
