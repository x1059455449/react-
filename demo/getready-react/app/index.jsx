import React from 'react'
import { render } from 'react-dom'

import './static/css/common.less'

// class Hello extends React.Component {
//     render() {
//         return (
//             <p>hello world</p>
//         )
//     }
// }

//引入Hello
import Hello from './containers/Hello/';

render(
    <Hello/>,
    document.getElementById('root')
)
