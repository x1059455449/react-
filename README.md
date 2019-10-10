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

    class App extends React.Component {
        constructor(props) {
            super(props)
        }
    render() {
        return (
            <div>
                name: {this.props.name},
                age: {this.props.age}
            </div>
        )
        }
    }
    render()

    function render() {
        ReactDOM.render(
            <App name="hello" age={18}/>,
                document.getElementById('root')
        )
    }

## 组件通信

### React 父子组件之间如何通信

    父传子：父元素传一个函数给子元素，子元素去调用
    爷传孙：爷元素传给父元素，父元素再传给子元素

    [组件通信例子](http://js.jirengu.com/sigupalami/1/edit?js,output)

## 组件通信 - eventHub（兄弟组件通信，任意组件之间如何通信）

    1.任意两个组件之间如何通信
    2.发布订阅模式
    3.Redux

<!-- https://jsbin.com/decamay/edit?js,output -->
[http://js.jirengu.com/koyiyidajo/1/edit?html,js,output](http://js.jirengu.com/koyiyidajo/1/edit?html,js,output)
[http://js.jirengu.com/wifonewozo/1/edit?js,output](http://js.jirengu.com/wifonewozo/1/edit?js,output)

### reduce

store是用来存数据的地方
reducer对数据的变动

<!-- https://jsbin.com/noxopeg/edit?js,output -->
[http://js.jirengu.com/senomeyuta/1/edit?js,output](http://js.jirengu.com/senomeyuta/1/edit?js,output)

## Redux 是什么(不懂，需重复)

[Redux 的文档和例子](https://redux.js.org/introduction/examples)

### 重要 API

## Redux

1.[Reducer 函数](https://cn.redux.js.org/docs/basics/Reducers.html)

    const reducer = (state, action)=>{
    if(state === undefined){
        return {n: 0}
    }else{
        if(action.type === 'add'){
            var newState = {n: state.n + action.payload}
            return newState
        }else{
            return state
        }
    }
    }

2.store

    const store = createStore(reducer)

3.store.subscribe

    store.subscribe(()=>{
    render()
    })

4.store.dispatch

    store.dispatch({type:'add', payload: 1})

## React-Redux

1.Provider 标签

    <Provider store={store}>
        <App />
    </Provider>

2.connect 函数

    function mapStateToProps(state){
    return {
        n: state.n
    }
    }
    function mapDispatchToProps(dispatch) {
    return {
        add1: ()=> dispatch({type:'add', payload: 1})
    }
    }

    export default connect(mapStateToProps,mapDispatchToProps)(App);

[第一个例子](http://js.jirengu.com/jajovafazi/1/edit?html,output)

[React + Redux 代码]()

[React + Redux + React-Redux 代码]()
两次截图
