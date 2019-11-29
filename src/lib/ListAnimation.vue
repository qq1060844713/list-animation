<template>
    <transition-group class="list-item" name='flip-list' tag='ul' mode='in-out'>
        <div class="flip-list-item" :style="'height:'+ height / TableLen + 'px'" v-for="(item,index) in TableData" :key="item.ids">
             <slot :item="item" :index="index"></slot>
        </div>
    </transition-group>
</template>

<script>
    export default {
        name: 'ListAnimation',
        props: {
            TableLen: Number,
            'listData': { // 列表数据；
                type: Object,
                default: () => {
                    return {};
                }
            },

            // 来自用户的选项配置
            'option': {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data: function () {
            return {
                personDate:[],
                height: 0
            }
        },
        computed: {
            TableData: function () {
                let _this = this;
                if (_this.$el) _this.height = _this.$el.parentElement.offsetHeight;
                if (_this.personDate.length > _this.TableLen) {
                    _this.personDate.splice(_this.TableLen, 1);
                }
                return _this.personDate;
            }
        },
        methods: {
            getItem(item) {
                this.$emit('item', item);
            },
            add(newData) {
                let _this = this;
                newData.ids = Math.floor(Math.random() * 10000000);
                 if (newData instanceof Array) {
                    for (let i = 0; i < newData.length; i++) {
                        _this.personDate.push(newData[i]);
                    }
                    return _this.personDate
                }
                _this.personDate.unshift(newData);
            }
        },
        watch: {
            // list数据更新
            listData(newVal, oldVal) {
                this.$nextTick(() => {
                    this.personDate.unshift(newVal);
                })
            }
        },
    }
</script>

<style scoped lang="scss">
    .list-item {
        display: flex;
        flex-direction: column;
        align-content: space-around;
        width: 100%;
        overflow:hidden
    }

    .flip-list-enter-active {
        transition: all 1.2s;
    }

    .flip-list-move {
        transition: transform 1.2s;
    }

    .flip-list-item {
        width: 100%;
        flex-grow: 1;
        position: relative;
        max-height: 20%;
    }
    .flip-list-leave-active {
        transition: all 1.2s;
    }

    .flip-list-enter-active {
        transition: all 1.2s;
    }

    .flip-list-move {
        transition: transform 1.2s;
    }

    .flip-list-enter {
        transform: translateY(-100%);
    }

    .flip-list-leave-to {
        transform: translateY(100%);
    }
</style>
