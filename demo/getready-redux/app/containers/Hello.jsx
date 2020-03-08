import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userinfoActions from '../actions/userinfo'

import A from '../components/A'
import B from '../components/B'
import C from '../components/C'

class Hello extends React.Component{
    render() {
        console.log('Hello内',this.props)
        return (
            <div>
                <p>Hello</p>
                <A userinfo={this.props.userinfo}/>
                <B userinfo={this.props.userinfo}/>
                <C actions={this.props.userinfoActions}/>
            </div>
        )
    }
    componentDidMount() {
        // 模拟登陆
        console.log('componentDidMount内',this.props)
        this.props.userinfoActions.login({
            userid: 'abc',
            city: 'beijing'
        })
    }
}

// 任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用
// 当前组件如需使用redux中的共享数据，在此设置，就能够当作属性来使用
// 函数内的store就是 Redux store 所存储的数据
function mapStateToProps(state) {
    console.log('mapStateToProps',state)
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    console.log('mapDispatchToProps')
    return {
        userinfoActions:bindActionCreators(userinfoActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Hello)