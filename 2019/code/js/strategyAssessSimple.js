//配置数据
var configData = [
  { index: 1, text: '套餐类型', disabled: false, partTitle: '套餐类型分析' },
  { index: 2, text: 'ARPU值', disabled: false, partTitle: '目标用户ARPU值分布分析' },
  { index: 3, text: '流量', disabled: false, partTitle: '目标用户流量分析' },
  { index: 4, text: '主叫次数占比', disabled: false, partTitle: '主叫次数占比分析' },
  { index: 5, text: '入网时长', disabled: false, partTitle: '入网时长分析' },
  { index: 6, text: '用户状态', disabled: false, partTitle: '用户状态分析' },
  { index: 7, text: '稳定度', disabled: false, partTitle: '稳定度分析' },
  { index: 8, text: '活跃度', disabled: false, partTitle: '活跃度分析' },
  { index: 9, text: '年龄', disabled: false, partTitle: '目标用户年龄段分布分析' },
  { index: 10, text: '性别', disabled: true, partTitle: '性别分析' },
  { index: 11, text: '地市', disabled: true, partTitle: '地市分析' },
  { index: 12, text: '用户等级', disabled: true, partTitle: '用户等级分析' },
]
//页面显示模块index
var showPartArr = [2, 3, 9];
// 配置按钮模块
var templeLi = '<li class="config-item fl {isChoose}"><button {onclick} {disabled}>{text}</button></li>'
// 图表模块
var partHtml = '<div class="normal-part per22 "  style="display:block;">' +
  '<div class="part-title-wrap"><p class="part-title">{partTitle}</p></div>' +
  '<div class="part-body "><div id="{chartId}" style="width: 100%;height: 280px;"></div></div></div>'

//详细数据点击事件
function toDetail (title) {
  event.preventDefault()
  //todo 具体详细操作
  alert(title)

  return false;
}


// 渲染页面图表
function renderPage (param) {
  console.log('param==',param)
  //todo ajax请求渲染页面
  // $.ajax({
  //     type: "POST",
  //     url: 'http://10.21.66.43:8085/evaluate_web/assessSimple/queryAll',
  //     data:{},
  //     success: function (data) {

  var data = {
    "packageTypeList": [{ "name": "互联网套餐", "perNum": 10, "value": 10 }, { "name": "4G套餐", "perNum": 20, "value": 20 }, { "name": "本地套餐", "perNum": 30, "value": 30 }, { "name": "其他套餐", "perNum": 40, "value": 40 }],

    "xArpuList": ["未出账", "0~10", "10~20", "20~30", "30~50", "50~100", "100以上"],
    "yArpuList": [10, 20, 30, 40, 50, 60, 70],

    "xFlowList": ["无流量", "0~1G", "1G~5G", "5G~10G", "10G~20G", "20G~40G", "40G以上"],
    "yFlowList": [10, 20, 30, 40, 50, 60, 70],

    "callingTimesRateList": [{ "name": "无主叫", "perNum": 10, "value": 10 }, { "name": "0%~20%", "perNum": 20, "value": 20 }, { "name": "20%~50%", "perNum": 30, "value": 30 }, { "name": "50%~80%", "perNum": 40, "value": 40 }, { "name": "80%以上", "perNum": 50, "value": 50 }],

    "xIndurationList": ["不足1月", "1月~3月", "3个月~6个月", "6个月~1年", "1年~3年", "3年~6年", "6年~10年", "10年以上"],
    "yIndurationList": [10, 20, 30, 40, 50, 60, 70, 80],

    "userStatusList": [{ "name": "开通", "perNum": 10, "value": 10 }, { "name": "其他", "perNum": 20, "value": 20 }],

    "stabilityRateList": [{ "name": "高稳定", "perNum": 10, "value": 10 }, { "name": "中稳定", "perNum": 20, "value": 20 }, { "name": "低稳定", "perNum": 30, "value": 30 }, { "name": "极不稳定", "perNum": 40, "value": 40 }],

    "activityRateList": [{ "name": "高活跃", "perNum": 10, "value": 10 }, { "name": "中活跃", "perNum": 20, "value": 20 }, { "name": "低活跃", "perNum": 30, "value": 30 }],

    "ageLevelList": [{ "name": "未成年（0~18）", "perNum": 10, "value": 10 }, { "name": "大学生（18~25）", "perNum": 20, "value": 20 }, { "name": "上班族（25~45", "perNum": 30, "value": 30 }, { "name": "中年人（45~65）", "perNum": 40, "value": 40 }, { "name": "老年人（65~）", "perNum": 50, "value": 50 }],

    "sexList": [{ "name": "男", "perNum": 10, "value": 10 }, { "name": "女", "perNum": 20, "value": 20 }, { "name": "未知", "perNum": 30, "value": 30 }],

    "xAreaCodeList": ["兰州", "临夏", "定西", "天水", "武威", "陇南", "平凉", "白银", "酒泉", "庆阳", "张掖", "金昌", "嘉峪关", "甘南"],

    "yAreaCodeList": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],

    "userLevelList": [{ "name": "1级", "perNum": 10, "value": 10 }, { "name": "2级", "perNum": 20, "value": 20 }, { "name": "3级", "perNum": 30, "value": 30 }],

    "otherMap": { "execDate": "20191112", "saleName": "充值送流量", "saleScore": "7", "simillerRate": "90" }
  }
  //PACKAGE_TYPE 饼
  var pieData = data.packageTypeList;
  rendAssessPie('chart1', pieData);

  //ARPU 柱
  var xAxisData = data.xArpuList
  var barData = data.yArpuList
  rendSingleBarChart2('chart2', xAxisData, barData)

  //FLOW 柱
  var xAxisData = data.xFlowList
  var barData = data.yFlowList
  rendSingleBarChart2('chart3', xAxisData, barData)

  //CALLING_TIMES_RATE 饼
  var pieData = data.callingTimesRateList;
  rendAssessPie('chart4', pieData);

  //IN_DURATION 柱
  var xAxisData = data.xIndurationList
  var barData = data.yIndurationList
  rendSingleBarChart2('chart5', xAxisData, barData)

  //USER_STATUS 饼
  var pieData = data.userStatusList;
  rendAssessPie('chart6', pieData);

  //STABILITY_RATE 饼
  var pieData = data.stabilityRateList;
  rendAssessPie('chart7', pieData);

  //ACTIVITY_RATE 饼
  var pieData = data.activityRateList;
  rendAssessPie('chart8', pieData);

  //AGE_LEVEL 饼
  var pieData = data.ageLevelList;
  rendAssessPie('chart9', pieData);
  //SEX 饼
  var pieData = data.sexList;
  rendAssessPie('chart10', pieData);

  //AREA_CODE 柱
  var xAxisData = data.xAreaCodeList
  var barData = data.yAreaCodeList
  rendSingleBarChart2('chart11', xAxisData, barData)

  //USER_LEVEL 饼
  var pieData = data.userLevelList;
  rendAssessPie('chart12', pieData);

  rendOtherMap(data.otherMap,param.productId)
  //     },
  //     error: function (XMLHttpRequest, textStatus) {
  //         alert("请求对象XMLHttpRequest: "+XMLHttpRequest.responseText);
  //     }
  // })
}
// 额外数据渲染
function rendOtherMap (otherMap,productId) {
  var otherMap=[
    {
      productId:'1',
      simillerRate:'7',
      saleName:'产品1',
      saleScore:'1',
      execDate:'20191010'
    },
    {
      productId:'2',
      simillerRate:'9',
      saleName:'产品2',
      saleScore:'2',
      execDate:'20191010'
    },
    {
      productId:'3',
      simillerRate:'8',
      saleName:'产品3',
      saleScore:'3',
      execDate:'20191010'
    }
  ]

  var otherMapTemplate='<div class="normal-part per3 similarity-part {active}"  productId="{productId}">'+
  '<div class="part-body "><p>相似度: <span class="rate-num" >{simaillerRate}</span></p>'+
    '<p class="product-num"><a class="big-text" href="https://www.baidu.com/" id="score2">{saleScore}</a>分</p>'+
    '<p class="product-name">{saleName}</p>'+
    '<p class="clerafix"><span class="fl" >{execDate}</span>'+
      '<a class="fr" href="javascript:;" >详细数据</a>'+
   '</p></div></div>'
   var arr=[];
   productId=productId||otherMap[0].productId;
   for(var i=0;i<otherMap.length;i++){
     var item=otherMap[i];
     arr.push(otherMapTemplate.replace(/\{productId\}/g,item.productId)
     .replace(/\{active\}/g,item.productId==productId?'active':'')
     .replace(/\{simaillerRate\}/g,item.simillerRate)
     .replace(/\{saleName\}/g,item.saleName)
     .replace(/\{saleScore\}/g,item.saleScore)
     .replace(/\{execDate\}/g,item.execDate))
   }
  $('.similarity-wrap').html(arr.join(''))
}

//产品相似度分析 区域点击切换
$(document).on('click','.similarity-part',function () {
  var parent = $(this).parents('.similarity-wrap')
  parent.find('.similarity-part').removeClass('active')
  $(this).addClass('active')
  var productId=$(this).attr('productId')
  renderPage({productId:productId})
})
// 渲染配置列表
function rendConfigWrap () {
  var arr = [];
  for (var i = 0; i < configData.length; i++) {
    var item = configData[i];
    arr.push(templeLi.replace(/\{text\}/g, item.text)
      .replace(/\{onclick\}/g, 'onclick="choseConfigItem(\'' + item.index + '\')"')
      .replace(/\{isChoose\}/g, showPartArr.indexOf(+item.index) > -1 ? 'active' : '')
      .replace(/\{disabled\}/g, item.disabled ? 'disabled=true' : ''))
  }
  $('.config-list').html(arr.join(''))
 
}
function rendChartPart(){
  var htmlArr = []
  for (var i = 0; i < showPartArr.length; i++) {
    var item = configData[showPartArr[i] - 1];
    htmlArr.push(partHtml.replace(/\{partTitle\}/, item.partTitle).replace(/\{chartId\}/g, 'chart' + item.index))
  }
  $('.config-part-list').html(htmlArr.join(''));
  renderPage({})
}
// 单击配置单项
function choseConfigItem (id) {
  var index = showPartArr.indexOf(+id)
  if (index > -1) {
    showPartArr.splice(index, 1)
  } else {
    showPartArr.push(+id)
  }
  rendChartPart();
  rendConfigWrap();
}

$(function () {
  rendChartPart()
})

