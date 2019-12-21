# list-animation

基于vue的列表滚动组件

## 使用

安装
``` bash
npm install list-animation -S
```

全局应用组件
``` javascript
import ListAnimation from 'list-animation'
Vue.use(ListAnimation)
```

使用组件
``` html
    <div class="container">
       <list-animation ref="listAnimation_list" :TableLen="6" :listData='listdata' initPos="top-to-bottom">
          <template slot-scope="{item}">
              <div class="box">
                 <img class="item" :src="item.image"/>
              </div>
          </template>
       </list-animation>
    </div>
  this.$refs.listAnimation.add(item);
```

组件属性
```
TableLen: 显示的数量
listData: Array 数据源
initPos: 动画方向(目前仅支持两种) top-to-bottom (从上到下) left-to-right(从左到右)
duration:动画时间 默认1.2s (可自动调节滑动的时间)
```

vue属性方式
```
<template slot-scope="{item}">
    <div>列表item布局样式</div>
</template>
slot-scope:(必填项)列表条目名称可自定义
```


组件方法
```
add:添加数据方法(Array or Object)

```



## 效果
![image](https://raw.githubusercontent.com/qq1060844713/list-animation/master/screen.gif)
