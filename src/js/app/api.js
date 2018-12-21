import $ from 'jquery'

var apiHost = 'http://148.70.52.4:3000'

if (__DEBUG) {
  apiHost = 'http://localhost:3000'
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

export function getCategories () {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `${apiHost}/categories`,
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