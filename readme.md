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
  <div class="item">
      <div class="container">
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
  this.$refs.listAnimation.add(item);
```

组件属性
```
TableLen: 显示的数量
listData: [] 数据源
initPos: 动画方向(目前仅支持两种) top-to-bottom (从上到下) left-to-right(从左到右)
duration:动画时间 默认1.2s (可自动调节滑动的时间)
```

组件方法
```
add:添加一条数据方法

```



## 效果
![image](https://raw.githubusercontent.com/qq1060844713/list-animation/master/screen.gif)
