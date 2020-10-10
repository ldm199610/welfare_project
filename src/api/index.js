import request from '../assets/js/axios'
export function getData(params) {
    return request({
        method: 'get',
        url: '/feedback.php',
        params
    })
  }