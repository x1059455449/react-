# 2019-09-21

## React 的诞生

[Bable-Online](https://babeljs.io/docs/en/)

### 第一个例子

[简单的加减法](http://js.jirengu.com/depujabata/1/edit?js,output)

## 涉及到的工具

[BootCDN](https://www.bootcdn.cn)

引入umd格式的cdn

### 元素

createElement

JSX

虚拟DOM就是个对象

### 第二个例子

[代码优化过的加减法](http://js.jirengu.com/pixinagupe/2/edit?html,js,output)

    凡是变量就近当前作用域获取
    如果不是要渲染一个字符串或者其他的，都要添加{}
    方法名也是一样，都要添加{}

## 组件的诞生

> 简单组件用函数

    第一个参数就是 props

>复杂组件用 class

    constructor(props) super(props)
    this.state
    this.setState()
    render

> setState的优点

    可以对更新进行优化，会把大批量的更新合并，减少更新损耗
    异步更新

### 代码例子

[组件代码例子](http://js.jirengu.com/napicihero/1/edit?html,js,output)
