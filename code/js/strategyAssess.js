var configData = [
  { id: 'configPart1', text: '套餐类型', isChoose: false, disabled: false },
  { id: 'configPart2', text: '主套餐资费', isChoose: false, disabled: false },
  { id: 'configPart3', text: 'ARPU值', isChoose: true, disabled: false },
  { id: 'configPart4', text: '流量', isChoose: true, disabled: false },
  { id: 'configPart5', text: '主教次数占比', isChoose: false, disabled: false },
  { id: 'configPart6', text: '入网时长', isChoose: false, disabled: false },
  { id: 'configPart7', text: '用户状态', isChoose: false, disabled: false },
  { id: 'configPart8', text: '年龄', isChoose: true, disabled: false },
  { id: 'configPart9', text: '性别', isChoose: false, disabled: false },
  { id: 'configPart10', text: '地市', isChoose: false, disabled: false },
  { id: 'configPart11', text: '稳定度', isChoose: false, disabled: true },
  { id: 'configPart12', text: '活跃度', isChoose: false, disabled: true },
  { id: 'configPart13', text: '用户等级', isChoose: false, disabled: true },
]

//详细数据点击事件
function toDetail (title) {
  event.preventDefault()
  //todo 具体详细操作
  alert(title)

  return false;
}
//产品相似度分析 区域点击切换
$('.similarity-part').click(function () {
  var parent = $(this).parents('.similarity-wrap')
  parent.find('.similarity-part').removeClass('active')
  $(this).addClass('active')
  renderPage()
})

// 渲染页面图表
function renderPage () {
  //todo ajax请求渲染页面
  var pieData = [
    { name: '200以上', value: 122, perNum: 39 },
    { name: '100-200', value: 12, perNum: 39 },
    { name: '50-100', value: 21, perNum: 39 },
    { name: '0-50', value: 112, perNum: 39 }
  ];
  rendAssessPie('chart11', pieData, '本策略')
  rendAssessPie('chart12', pieData, '相似策略——充值送流量')
  var xAxisData = [
    '2018-11',
    '2018-12',
    '2019-01',
    '2019-02',
    '2019-03',
    '2019-04',
    '2019-05'
  ]
  var barData = [820, 932, 901, 934, 1290, 130, 1320]
  rendSingleBarChart2('chart21', xAxisData, barData, '本策略')
  rendSingleBarChart2('chart22', xAxisData, barData, '相似策略——充值送流量')
  var xAxisData = [
    '2018-11',
    '2018-12',
    '2019-01',
    '2019-02',
    '2019-03',
    '2019-04',
    '2019-05'
  ]
  var barData = [
    { name: '1', data: [220, 132, 1, 94, 90, 10, 130] },
    { name: '2', data: [120, 92, 91, 34, 190, 130, 120] },
    { name: '3', data: [20, 32, 90, 34, 290, 30, 320] }
  ]
  rendMultiLineChart('chart31', xAxisData, barData, '本策略')
  rendMultiLineChart('chart32', xAxisData, barData, '相似策略——充值送流量')
}
// 渲染配置列表
function rendConfigWrap () {
  var arr = [];
  var templeLi = '<li class="config-item fl {isChoose}"><button {onclick} {disabled}>{text}</button></li>'
  for (var i = 0; i < configData.length; i++) {
    var item = configData[i];
    arr.push(templeLi.replace(/\{text\}/g, item.text)
      .replace(/\{onclick\}/g, 'onclick="choseConfigItem(' + i + ',\'' + item.id + '\')"')
      .replace(/\{isChoose\}/g, item.isChoose ? 'active' : '')
      .replace(/\{disabled\}/g, item.disabled ? 'disabled=true' : ''))
  }
  $('.config-list').html(arr.join(''))
}
// 单击配置单项
function choseConfigItem (i, id) {
  configData[i].isChoose = !configData[i].isChoose;
  $('#' + id).toggle();
  rendConfigWrap();
}

$(function () {
  //渲染默认配置项
  for (var i = 0; i < configData.length; i++) {
    var item = configData[i];
    item.isChoose ? $('#' + item.id).show() : null;
  }
  renderPage()
})