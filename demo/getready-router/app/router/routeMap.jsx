//引入Router, Route, IndexRoute
import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

//引入组件
//引入App组件是因为其他的路由都是在App页面之下的，注意App页面的书写
//特别注意this.props.children
//其他用到路由的子页面都要需要引入link
//import { Link } from 'react-router'
import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

class RouteMap extends React.Component{
    render() {
        console.log(this.props)
        return(
            <Router history={this.props.history} onUpdate={this.onUpdateHandle.bind(this)}>
                <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="list" component={List}/>
                    <Route path='detail/:id' component={Detail}/>
                    <Route path="*" component={NotFound}/>
                </Route>
            </Router>
        )
    }
    onUpdateHandle() {
        console.log('每次Router变化之后这里函数都会触发')
    }
}

export default RouteMap
