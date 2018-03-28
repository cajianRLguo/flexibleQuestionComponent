const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const fastRange = n => {
  return [...Array(n).keys()]
}

const parseIntforArray = arr => {
  arr.forEach(function(v,i,arr){
    arr[i] = parseInt(v)
  })
  return arr
}

module.exports = {
  formatTime: formatTime,
  fastRange:fastRange,
  parseIntforArray: parseIntforArray
}
