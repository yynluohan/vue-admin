import 'whatwg-fetch';
import 'es6-promise';

function checkServerError(response) {
  // 400 错误依旧格式化成为 json
  if (response.status >= 200 && response.status <= 500 && response.status !== 401) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function parseJSON(response) {
  if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
    return response.json().then(data => ({
      responseJSON: data,
      url: response.url,
      response,
    }));;
  }
  return response.blob();
  // const file = new Blob(
  //   [response.body],
  //   { type: 'application/pdf' });
  // const fileURL = URL.createObjectURL(file);
  // return fileURL;
}

function checkStatus({ responseJSON = {}, url }) {
  if (responseJSON.code !== undefined || responseJSON.status_code !== undefined) {
    return responseJSON;
  }
  const error = new Error(responseJSON.code);
  error.message = responseJSON.message;
  error.code = responseJSON.code || responseJSON.status_code;
  error.url = url;
  throw error;
}

export default function request(url, options) {
  const opts = { ...options, 'mode': 'cors' };
  // 默认 发送 json 格式。
  opts.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': "Bearer " + localStorage.getItem('token'),
    ...opts.headers
  };
  if (opts.headers['Content-Type'] === false) {
    // 在上传文件的时候需要删掉，由浏览器自己设置，避免 boundary 的问题
    delete opts.headers['Content-Type'];
  }

  let finalUrl = '';
  if (url.indexOf('https://') > -1 || url.indexOf('http://') > -1) {
    finalUrl = url
  } else {
    finalUrl = window.MC.HOST + url;
  }

  return fetch(finalUrl, opts)
    .then(checkServerError)
    .then(parseJSON)
    .then(checkStatus)
    .catch(err => {
      const { response } = err;
      if (response && response.status === 401) {
        window.localStorage.token = '';
        window.location.href = '#' + '/login'
      }
    })
}
