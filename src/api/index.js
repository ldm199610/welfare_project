import request from '../assets/js/axios'
export function getWelfareData(params) {
    return request({
        method: 'get',
        url: '/share_api.php',
        params
    })
  }
  // export function getData(params) {
  //     return request({
  //         method: 'get',
  //         url: 'api/feedback.php',
  //         params
  //     })
  //   }