<template>
    <div>
        <div style="float: left;margin-left: 20vw">
            <p>方向:从上到下</p>
            <div class="main">
                <div class="con">
                    <list-animation ref="listAnimation_list"
                                    :TableLen="6" :listData='listdata' initPos="top-to-bottom" duration="1.2s">
                        <template slot-scope="{item}">
                            <div class="box">
                                <img class="item" :src="item.image"/>
                            </div>
                        </template>
                    </list-animation>
                </div>
            </div>
        </div>
        <div style="text-align: center">
            <div class="main" style="margin-right: 20vw">
                <p style="margin-top: 6vw">方向:从左到右</p>
                <div class="con-l">
                    <list-animation ref="listAnimation"
                                    :TableLen="4" :listData='listdata' initPos="left-to-right" duration="1.2s">
                        <template slot-scope="{item}">
                            <div class="lat-bgs">
                                <img class="item" :src="item.image"/>
                            </div>
                        </template>
                    </list-animation>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ListAnimation from "../lib/ListAnimation";
    let it=1;
    export default {
        name: 'HelloWorld',
        components: {ListAnimation},
        props: {
            msg: String
        },
        data() {
            return {
                listdata: [
                    {
                        "id": Math.floor(Math.random() * 1000000000),
                        "image": "http://img15.3lian.com/2015/f2/8/d/30.jpg",
                        "name": "测试" + Math.floor(Math.random() * 1000)
                    },
                    {
                        "id": Math.floor(Math.random() * 1000000000),
                        "image": "http://img15.3lian.com/2015/f2/8/d/32.jpg",
                        "name": "测试" + Math.floor(Math.random() * 1000)
                    },
                    {
                        "id": Math.floor(Math.random() * 1000000000),
                        "image": "http://img15.3lian.com/2015/f2/8/d/33.jpg",
                        "name": "测试" + Math.floor(Math.random() * 1000)
                    }
                ],
            }
        },
        methods:{
            add(){
                let item = {
                    "id": it,
                    "image": "http://img15.3lian.com/2015/f2/8/d/" + it + ".jpg",
                    "name": "测试" + Math.floor(Math.random() * 1000)
                };
                it++;
                this.$refs.listAnimation.add(item);
                this.$refs.listAnimation_list.add(item);
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
    .main {
        display: inline-block;
    }

    .con {
        width: 200px;
        height: 400px;
        border: 1px solid #46513c;
        display: flex;
    }
    .con-l {
        width: 500px;
        height: 200px;
        border: 1px solid #46513c;
        display: flex;
    }

    .blue {
        background: rgb(13, 49, 117);
    }

    .gray {
        background: #ddd;
    }

    .box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
    .box_l {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .item {
        height: 70%;
        width: 70%;
        align-self: center;
    }

    .lat-bgs {
        width: 100%;
        height: 100%;
        vertical-align: middle;
        display: flex;
    }
</style>
