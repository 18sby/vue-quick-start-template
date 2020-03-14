import axios from './axios';
import { db } from '../utils/lowdb';

// ? const { method = 'GET', url, auth = true, data = {} } = config;
export const request = (config) => {
  return new Promise((resolve, reject) => {
    const { method = 'GET', url, auth = true, data = {} } = config;
    const headers = {};
    if (auth === true) {
      let token = db.get('token').value();
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    axios({
      headers,
      method,
      url,
      data,
    }).then(response => {
      if (response.status === 200) {
        resolve(response.data);
      } else {
        console.log( 'status 不是 200 的返回内容: ', response );
      }
    }).catch(error => {
      reject( 'axios 请求失败: ', error.response );
    })
  }).catch(error => {
    console.log( 'https? 请求失败: ', error.response );
  })
}