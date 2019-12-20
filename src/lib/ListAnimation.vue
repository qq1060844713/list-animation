<template>
    <transition-group
            :class="initPos==='top-to-bottom'?'list-item':'list-item-bottom'"
            name='flip-list'
            tag='ul'
            mode='in-out'
            v-bind:style="slidStyle"
            :enter-class="enterStyle"
            enter-active-class="flip-list-enter-active"
            move-class="flip-list-move"
            leave-active-class="flip-list-leave-active"
            :leave-to-class="leaveStyle">
        <div class='flip-list-item' :style="initPos==='top-to-bottom'?'max-height:'+ 100/TableLen+'%;'+'min-height:'+100/TableLen+'%;':'max-width:'+100/TableLen+'%;'+'min-width:'+100/TableLen+'%'"
             :key="item.ids" v-for="(item,index) in TableData"
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
                if (_this.personDate.length > _this.TableLen) {
                    _this.personDate.splice(_this.TableLen, 1);
                }
                return _this.personDate;
            },
            slidStyle() {
                if (this.duration) {
                    document.styleSheets[0].insertRule('.flip-list-enter-active { transition: all ' + this.duration + '!important; }', 0);
                    document.styleSheets[0].insertRule('.flip-list-move { transition: all ' + this.duration + '!important; }', 0);
                }
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
            randomIndex() {
                return Math.floor(Math.random() * 1000)
            },
            getItem(item) {
                this.$emit('item', item);
            },
            add(newData) {
                let _this = this;
                if (newData instanceof Array) {
                    for (let i = 0; i < newData.length; i++) {
                        newData[i].ids = _this.randomIndex();
                        _this.personDate.unshift(newData[i]);
                    }
                } else {
                    newData.ids = _this.randomIndex();
                    _this.personDate.unshift(newData)
                }
            }
        },
        mounted(){
            if (this.listData instanceof Array) {
                for (let i = 0; i < this.listData.length; i++) {
                    this.listData[i].ids = this.randomIndex();
                    this.personDate.unshift(this.listData[i]);
                }
            }
        },
        watch: {
            // list数据更新
            // listData(newVal, oldVal) {
            //     this.$nextTick(() => {
            //         if (newVal instanceof Array) {
            //             for (let i = 0; i < newVal.length; i++) {
            //                 this.personDate.push(newVal[i]);
            //             }
            //             return this.personDate
            //         }
            //     })
            // }
        },
    }
</script>

<style scoped lang="scss">
    .list-item {
        display: flex;
        flex-direction: column;
        align-content: space-around;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .list-item-bottom {
        display: flex;
        align-content: space-around;
        width: 100%;
        height: 100%;
        overflow: hidden;
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
