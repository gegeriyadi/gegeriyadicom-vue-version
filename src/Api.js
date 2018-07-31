import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://gegeriyadi.test/wp-json/wp/v2/',
    withCredentials: false,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}