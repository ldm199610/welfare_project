import axios from 'axios';
import Qs from 'qs';

axios.defaults.timeout = 5000;
// axios.defaults.baseURL = 'https://setting.qtonghua.com';

// http request 拦截器
const server = axios.create({
  baseURL:'/',
  headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
      //'Content-Type': 'application/multipart/form-data'
  },
  transformRequest: function(data, header){
      if (typeof(data) == 'object') {
         return Qs.stringify(data)//formateParams(data)
      };
      return data
  }
})
server.interceptors.request.use(
  config => {
//     const token = getCookie('名称');        //注意使用的时候需要引入cookie方法，推荐js-cookie
         // config.data = JSON.stringify(config.data);
//     if(token){
//       config.params = {'token':token}
//     }
    let method = config.method;
    let datas;
    if (method == 'post') {
        datas = config.data || {};
    } else if (method == 'get') {
        datas = config.params || {};
    };
    // 需要和app共享登录态开启
    // if (method == 'post') {
    //     datas = config.data || {}
    //         config.data = datas
    // } else if (method == 'get') {
    //     datas = config.params || {}
    //         config.params = datas
    // }
    return config
  },
  error => {
    console.log('错误');
    return Promise.reject(err);
  }
)

// http response 拦截器
server.interceptors.response.use(
  response => {
    if (response.data.errCode == 2) {
      router.push({
        path: '/login',
        querry: {redirect: router.currentRoute.fullPath}// 从哪个页面跳转
      })
    }
    return response;
  },
  error => {
    console.log('错误');
    return Promise.reject(error);
  }
)
export default server
/*
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */

// export function fetch (url, params = {}) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params
//     })
//       .then(response => {
//         resolve(response.data);
//       })
//       .catch(err => {
//         reject(err);
//       })
//   })
// }

/*
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */

// export function post (url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.post(url, data)
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err);
//       })
//   })
// }

// /*
//    * 封装patch请求
//    * @param url
//    * @param data
//    * @returns {Promise}
//    */

// export function patch (url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.patch(url, data)
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err);
//       })
//   })
// }

// /*
//    * 封装put请求
//    * @param url
//    * @param data
//    * @returns {Promise}
//    */

// export function put (url, data = {}) {
//   return new Promise((resolve, reject) => {
//     axios.put(url, data)
//       .then(response => {
//         resolve(response.data);
//       }, err => {
//         reject(err);
//       })
//   })
// }
