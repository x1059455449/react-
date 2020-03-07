import React from 'react'

import Header from  '../../components/Header'
import Carousel from './subpage/Carousel'
import List from './subpage/List'
import Recommend from './subpage/Recommend'

class Hello extends React.Component{
    constructor(props,context){
        super(props,context)
        this.state = {
            now: Date.now()
        }
    }
    render() {
        return(
            <div>
                <Header title="hello"/>
                <Carousel/>
                <List/>
                <Recommend/>
        <p onClick={this.change.bind(this)}>点击改变{this.state.now}</p>
            </div>
        )
    }
    change(){
        this.setState({
            now: Date.now()
        })
    }
}





export default Hello