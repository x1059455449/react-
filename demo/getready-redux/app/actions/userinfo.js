//定义actions
import * as actionTypes from '../constants/userinfo'

export function login(data) {
    return {
        type: actionTypes.USERINFO_LOGIN,
        data
    }
}

export function updateCityName(data) {
    return {
        type: actionTypes.UPDATE_CITYNAME,
        data
    }
}

//https://www.jianshu.com/p/3db8dcc20a8e



// //更新收藏列表
// export function update(data) {
//     return {
//         type:'STORE_UPDATE',
//         data
//     }
// }
// //在App.js中完成页初始化，从后台获取该用户的所有收藏商品id存储到redux中
// //这里先fetch从后台获取json，然后触发将json更新到redux的update方法。
// export function getInitStore(username) {
//     return function (dispatch){
//         console.log('getInitStore执行了');
//         let option={method:'GET'};
//         fetch(`/api/store/getStore/${username}`,option)
//             .then(res => res.json())
//             .then(json => dispatch(update(json)));
//     };
// }