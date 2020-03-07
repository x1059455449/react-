import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

// 性能测试,可在控制台通过Perf.start,Perf.stop.Perf.printWasted来开启,停止和监测
import Perf from 'react-addons-perf'
// if (__DEV__) {
//     window.Perf = Perf
// }

window.Perf = Perf

import Todo from './containers/Todo';

render(
    <Todo/>,
    document.getElementById('root')
)
