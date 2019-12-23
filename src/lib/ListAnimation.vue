<template>
    <transition-group
            :class="initPos==='top-to-bottom'?'li li-top':'li li-left'"
            name='flip-list'
            tag='div'
            mode='in-out'
            v-bind:style="slidStyle"
            :enter-class="enterStyle"
            enter-active-class="flip-list-enter-active"
            move-class="flip-list-move"
            leave-active-class="flip-list-leave-active"
            :leave-to-class="leaveStyle">
        <div class='flip-list-item' :style="initPos==='top-to-bottom'?'max-height:'+ 100/TableLen+'%;'+'min-height:'+100/TableLen+'%;':'max-width:'+100/TableLen+'%;'+'min-width:'+100/TableLen+'%'"
             :key="item.ids" v-for="item in TableData"
             @click="getItem(item)">
            <slot :item="item"></slot>
        </div>
    </transition-group>
</template>

<script>
    export default {
        name: 'ListAnimation',
        props: {
            TableLen: Number,
            'listData': {
                type: Array,
                default: () => {
                    return [];
                }
            },
            'option': {
                type: Object,
                default: () => {
                    return {}
                }
            },
            'initPos': {
                type: String,
                default: ''
            },
            'duration': {
                type: String,
                default: '1.2s'
            },
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
                if (_this.personDate.length > _this.TableLen) _this.personDate.splice(_this.TableLen, 1);
                return _this.personDate;
            },
            slidStyle() {
                if (this.duration) {
                    document.styleSheets[0].insertRule('.flip-list-enter-active { transition: all ' + this.duration + '!important; }', 0);
                    document.styleSheets[0].insertRule('.flip-list-move { transition: all ' + this.duration + '!important; }', 0);
                }
                return 0;
            },
            enterStyle: function () {
                switch (this.initPos) {
                    case 'top-to-bottom':
                        return 'flip-list-enter';
                    case 'left-to-right':
                        return 'flip-list-left-enter';
                }
            },
            leaveStyle: function () {
                switch (this.initPos) {
                    case 'top-to-bottom':
                        return 'flip-list-leave-to';
                    case 'left-to-right':
                        return 'flip-list-left-leave-to';
                }
            }
        },
        methods: {
            disposData(newData) {
                let _this = this;
                if (Array.isArray(newData))
                    newData.forEach(function (item) {
                        _this.personDate.unshift(_this.randomIndex(item));
                    });
                else _this.personDate.unshift(_this.randomIndex(newData));
                return _this.personDate;
            },
            randomIndex(data) {
                data.ids = Math.floor(Math.random() * 1000);
                return data;
            },
            getItem(item) {
                this.$emit('item', item);
            },
            add(newData) {
                let _this = this;
                _this.disposData(newData);
            }
        },
        mounted() {
            this.disposData(this.listData);
        }
    }
</script>

<style scoped lang="scss">
    .li {
        display: flex;
        width: 100%;
        height: 100%;
        align-content: space-around;
        overflow: hidden;
    }
    .li-top{
        flex-direction: column;
    }
    .li-left{
        flex-direction: row;
        align-items: center;
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
    }

    .flip-list-enter {
        transition: all 1.2s;
        opacity: 0;
        transform: translateY(-100%);
    }

    .flip-list-enter-to {
        transition: all 1.2s;
    }

    .flip-list-leave-to {
        transition: all 1.2s;
        opacity: 0;
        transform: translateY(100%);
    }
    .flip-list-left-enter {
        transform: translate3d(-100%, 0, 0)
    }

    .flip-list-left-leave-to {
        transform: translate3d(100%, 0, 0)
    }


</style>
