import React from 'react'
//官方提供的用于性能优化的插件
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Input from  '../../components/Input'
import List from '../../components/List'


class Todo extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            todos:[]
        }
    }
    render() {
        return(
            <div>
                <Input submitFn={this.submitFn.bind(this)}/>
                <List todos={this.state.todos}
                deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }
    submitFn(value){
        const id = this.state.todos.length
        this.setState({
            todos:this.state.todos.concat({
                id: id,
                text: value
            })
        })
        console.log(this.state.todos)
    }
    deleteFn(id){
        let data = this.state.todos
        this.setState({
            //把和传入要删除的id进行对比，留下与传入id不同的项
            todos:data.filter(item => {
                if(item.id !== id){
                    return item
                }
            })
        })
    }
}





export default Todo