import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        // 执行传输过来的
        this.props.loadMoreFn();
    }
    componentDidMount() {
        // 使用滚动时自动加载更多
        const loadMoreFn = this.props.loadMoreFn
        const wrapper = this.refs.wrapper
        let timeoutId //节流
        function callback() {
            console.log(666)
            const top = wrapper.getBoundingClientRect().top//距离页面底部的高度
            const windowHeight = window.screen.height
            if (top && top < windowHeight) {
                console.log(top,windowHeight)
                // 证明 wrapper 已经被滚动到暴露在页面可视范围之内就会触发
                loadMoreFn()
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) {
                return
            }
            console.log(123)
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
            //如果50毫秒之内没有出发第二次scroll，那么就会执行callback，否则将执行clearTimeout
        }.bind(this), false);
    }
}

export default LoadMore