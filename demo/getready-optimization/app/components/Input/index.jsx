import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Input extends React.Component{
    constructor(props,context){
        super(props,context)
        //固定写法
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
        this.state = {
            value: ''
        }
    }
    render() {
        return(
            <div>
                <input type="text"
                style={{width: '100%', height: '40px', fontSize: '35px'}}
                value={this.state.value}
                onChange={this.change.bind(this)}
                onKeyUp={this.keyUpHandler.bind(this)}/>
            </div>
        )
    }
    change(e) {
        this.setState({
            value:e.target.value
        })
    }
    keyUpHandler(e) {
        const value = this.state.value
        if(e.keyCode === 13 && value.trim()){
            this.props.submitFn(value)
            this.setState({
                value: ''
            })
        }
    }
}

export default Input