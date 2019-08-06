/**
 * 下载图片
 * 文件的扩展名必须和图片编码匹配
 * @param {string} name 下载图片名称
 * @param {string} encodedImage 图片的base64编码
 * @param {string} type 图片类型 png jpg gif
 */
export function downloadImage(name, encodedImage, type) {
  const clearUrl = url => url.replace(/^data:image\/\w+;base64,/, '')
  const content = clearUrl(encodedImage)
  const link = document.createElement('a')
  link.style = 'position: fixed; left -10000px;'
  link.href = `data:application/octet-stream;base64,${encodeURIComponent(content)}`
  link.download = /\.\w+/.test(name) ? name : `${name}.${type}`

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * 下载 URL 文件
 downloadURI("data:text/html,HelloWorld!", "helloWorld.txt");
 * 文件的扩展名必须和图片编码匹配
 * @param {string} url 下载文件地址
 */
function downloadFile(url) {
  var link = document.createElement('a');
  link.style = 'position: fixed; left -10000px;';
  link.href = url;

  var fileName = url.split("/").pop();
  link.download = fileName

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}