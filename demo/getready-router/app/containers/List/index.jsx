import React from 'react'
import { hashHistory } from 'react-router'

class List extends React.Component {
    render() {
        const arr = [1,2,3]
        return (
            <div>
                <p>List</p>
                <ul>
                    {arr.map((item,index) => {
                        return <li key={index} onClick={this.clickJump.bind(this,item)}>
                            点击跳转{item}，注意查看路由
                        </li>
                    })}
                </ul>
            </div>
        )
    }
    clickJump(value) {
        hashHistory.push('/detail/' + value)
    }
}

export default List