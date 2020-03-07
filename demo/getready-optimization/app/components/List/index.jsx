import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class List extends React.Component{
    constructor(props,context){
        super(props,context)
        //固定写法
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            todos:[]
        }
    }
    render() {
        const data = this.props.todos
        console.log(data)
        return(
            <ul style={{marginTop: '10px', fontSize: '20px', lineHeight: '30px'}}>
                {
                    data.map((item,index) => {
                    return <li key={index} onClick={this.deleteTodo.bind(this,item.id)}>
                    {item.text}
                </li>
                    })
                }
            </ul>
        )
    }
    deleteTodo(id) {
        this.props.deleteFn(id)
    }
}

export default List