import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { CITYNAME } from '../../config/localStoreKey'
import { localStore } from '../../util/localStore'
import { hashHistory } from 'react-router'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeFn={this.changeCity.bind(this)}/>
            </div>
        )
    }
    changeCity(newCity) {
        if(newCity == null) {
            return
        }
        //修改redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(newCity)
        //修改本地缓存
        localStore.setItem(CITYNAME,newCity)
        //跳转页面
        hashHistory.push('/')
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)

