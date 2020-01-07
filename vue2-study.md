# Vue2学习总结

## Vue简介

1. JavaScript框架
2. 简化Dom操作
3. 响应式数据驱动



## el:挂载点

1. 作用范围：命中的元素和其内部的后代元素

2. 可以使用其他选择器，建议使用ID选择器

3. 可以使用其他的双标签



## data:数据对象

1. Vue中用到的数据定义在data中

2. data中可以写复杂类型的数据

3. 渲染复杂类型数据时，遵守js的语法即可



## v-text

1. 设置标签的文本值

2. 可使用差值表达式{{}}

3. 内部支持写表达式



## v-html

1. 设置元素的innerHTML

2. 内容中有html结构会被解析为标签

3. v-text无论内容是什么，只会解析为文本



## v-on

1. 作用：为元素绑定事件
2. 事件名不需要写on
3. 指令可以简写为@，例如 `@click="function"`
4. 绑定的方法定义在methods属性中
5. 方法内部通过this关键字可以访问定义在data中数据
6. 事件绑定的方法写成函数调用的方式，可以传入自定义参数
7. 定义方法时需要定义形参来接收传入的实参
8. 事件的后面跟上.修饰符可以对事件进行限制
9. .enter可以限制触发的按键为回车
10. 事件修饰符有多种



## v-show

1. 作用：根据真假切换元素的显示状态
2. 原理：修改元素的display，实现显示隐藏
3. 指令后面的内容，最终都会解析为布尔值
4. 值为true元素显示，值为false元素隐藏
5. 数据改变之后，对应元素的显示状态会同步更新



## v-if

1. 作用：根据表达式的真假切换元素的显示状态
2. 原理：通过操纵Dom元素来切换显示状态
3. 表达式的值为true，元素存在于Dom树中；为false，从Dom树中移除
4. 频繁地切换使用v-show，反之使用v-if，前者的切换消耗小



## v-bind

设置元素属性，例如：src，title，class

1. 作用：为元素绑定属性
2. 完整写法：v-bind:属性名
3. 简写：`:属性名`
4. 需要动态的增删class建议使用对象的方式：`{active:isActive}`



## v-for

1. 作用：根据数据生成列表结构
2. 数组经常和v-for结合使用
3. 语法：(item,index) in 数据
4. item和index可以结合其他指令一起使用
5. 数组长度的更新会同步到页面上，是响应式的



## v-model

1. 作用：便捷的设置和获取表单元素的值
2. 绑定的数据会和表单元素值相关联
3. 绑定的数据<-->表单元素的值（双向绑定）



## axios

1. 导包`<script src="https://unpkg.com/axios/dist/axios.min.js"></script>`
2. get请求：`axios.get("地址").then(function(response){},function(err){})`
3. post请求L：`axios.post("地址",{参数名:参数值,...}).then(function(response){},function(err){})`



## Vue+axios

1. axios回调函数中的this已经改变，无法访问到data中的数据
2. 把this保存起来，回调函数中直接使用保存的this即可，如下例

```vue
methods:{
   searchWeather:function(){
     var that=this;
                
     axios.get("http://wthrcdn.etouch.cn/weather_mini?city="+this.city)
          .then(function(response){
             that.weatherList=response.data.data.forecast;
           },function (err) {
               console.log(err);
           })
     },
}
```

3. 和本地应用的最大区别就是改变了数据来源



## 相关的练习代码

[Vue-github](https://github.com/Aqpcet/Vue2-study)