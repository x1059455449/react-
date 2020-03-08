//定义action
import * as actionTypes from '../constants/userinfo'

const initialState = {}

//创建规则
export default function userinfo(state = initialState,action) {
    console.log('action',action)
    //登陆成功后会有action.data
    switch (action.type) {
        //登陆
        case actionTypes.USERINFO_LOGIN:
            return action.data
        // 修改城市
        case actionTypes.UPDATE_CITYNAME:
            return action.data

        default:
            return state
    }
}