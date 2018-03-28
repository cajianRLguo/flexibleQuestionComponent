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
const getInputIndexs =(arr) => {
  var n = 0;
  var result = [];
  arr.forEach(function (v, i, arr) {
    // console.log(v.type)
    if (v.type == "onelineMultiSelectItem" || v.type == "inputTitleWithSlide" || v.type == "selectItem") {
      result[i] = n;
      n += 1;
    } else {
      // console.log(v.type)
    }

  })
  // console.log(result)
  return result
}

module.exports = {
  formatTime: formatTime,
  fastRange:fastRange,
  parseIntforArray: parseIntforArray,
  getInputIndexs: getInputIndexs
}
