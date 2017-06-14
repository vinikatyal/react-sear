import axios from 'axios'

export const getProductsRepo = () => {
  let headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
  return axios({
    method: 'GET',
    url: '/sample.json',
    headers: headers
  })
}
