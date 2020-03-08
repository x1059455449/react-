import React from 'react'

class Detail extends React.Component {
    render() {
        console.log("Detail",this.props,this.props.params)
        return (
            <div>
                <p>Detail</p>
                <div>url参数:{this.props.params.id}</div>
            </div>
        )
    }
}

export default Detail