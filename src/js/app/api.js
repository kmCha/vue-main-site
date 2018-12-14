import $ from 'jquery'

var apiHost = ''

if (__DEBUG) {
  apiHost = 'http://test.163.com:3000'
}

export function getArticles() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${apiHost}/posts`,
      type: 'GET',
      dataType: 'json',
      success: function (res) {
        resolve(res)
      },
      error: function () {
        reject(new Error('网络信号不好，请稍后再试'))
      }
    })
  })
}

export function getTags () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${apiHost}/tags`,
      type: 'GET',
      dataType: 'json',
      success: function (res) {
        resolve(res)
      },
      error: function () {
        reject(new Error('网络信号不好，请稍后再试'))
      }
    })
  })
}