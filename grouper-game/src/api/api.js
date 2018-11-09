import { AsyncStorage } from 'react-native';
import axios from 'axios';

import { API_CONFIG, API_URL } from '../../config';

/*function fetchToken() {

  const formBody = Object.keys(API_CONFIG).map(
    key=> encodeURIComponent(key)+'='+encodeURIComponent(API_CONFIG[key]))
    .join('&');

  return fetch(API_URL + '/token', {
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  })
    .then((response) => response.json())
    .then ((response) => {
      return response;
    })
    .catch(error => {
      console.log(error);
    })


}*/

export function fetchEmployees() {

  getToken();

}

function getToken() {
  const formBody = Object.keys(API_CONFIG).map(key=> encodeURIComponent(key)+'='+encodeURIComponent(API_CONFIG[key])).join('&');

  const token = axios.create({
    baseURL: `${API_URL}`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formBody
  });

  token.get('/token').then(function(response){
    // AsyncStorage.setItem('token', JSON.stringify(response.access_token));
    console.log(response);
  })





}

const instance = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});


const Api = {
  getToken: function getToken(API_CONFIG) {
    return instance.get('/token')
  }
};

