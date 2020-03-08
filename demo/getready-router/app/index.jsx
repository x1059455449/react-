import React from 'react'
import { render } from 'react-dom'
//引入hashHistory
import { hashHistory } from 'react-router'

import './static/css/common.less'

import RouteMap from './router/routeMap'

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
)
