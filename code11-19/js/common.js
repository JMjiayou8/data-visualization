/**
 * 获取url参数
 * @param {*} url 
 * getUrlParam('?saleId=lwac00&&saleName=%E8%AF%BB%E4%B9%A6%E9%80%81%E6%B5%81%E9%87%8F')======>>>{saleId: "lwac00", saleName: "读书送流量"}
 */
function getUrlParam (url) {
  var searchUrl = (url || location.search).substr(1);
  var paramObj = {}
  if (searchUrl) {
    var arr = searchUrl.split('&&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=')
      paramObj[decodeURI(a[0])] = decodeURI(a[1])
    }
  }
  return paramObj
}
function toQueryPair (key, value) {
  if (typeof value == 'undefined') {
    return key;
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}
/**
 * 拼接url参数
 * @param {*} param 
 * setUrlParam({a:1,b:2})=====>"a=1&&b=2"
 */
function setUrlParam (param) {
  var arr = []
  if (param) {
    for (var key in param) {
      key = encodeURIComponent(key);
      var values = param[key];
      if (values && values.constructor == Array) {//数组
        var queryValues = [];
        for (var i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(toQueryPair(key, value));
        }
        arr = arr.concat(queryValues);
      } else { //字符串
        arr.push(toQueryPair(key, values));
      }
    }
  }
  return arr.join('&&')
}

function formatDate(date,fmt)   { 
  var o = {   
    "M+" : date.getMonth()+1,                 //月份   
    "d+" : date.getDate(),                    //日   
    "h+" : date.getHours(),                   //小时   
    "m+" : date.getMinutes(),                 //分   
    "s+" : date.getSeconds(),                 //秒   
    "q+" : Math.floor((date.getMonth()+3)/3), //季度   
    "S"  : date.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}  
