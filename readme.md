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
           <list-animation ref="listAnimation"
                              :TableLen="5" :listData='listdata'>
                <template slot-scope="{item}">
                    <img style="height: 50px;width: 50px" :src="item.image"/>
                    <span>{{item.name}}</span>
                </template>
           </list-animation>
      </div>
  </div>
  this.$refs.listAnimation.add(item);
```

组件属性
```
ref: 定义调用组件中的方法
slot-scope:必填项 列表item 自定义条目样式
TableLen: 显示的数量
listData: {} 数据源
add:添加一条数据方法
```

## 效果
![image](https://raw.githubusercontent.com/qq1060844713/list-animation/master/screen.png)
