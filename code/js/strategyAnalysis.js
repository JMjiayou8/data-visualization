// $(function () {
//   rendTimeLine(new Date().getMonth())
//   renderPage()
// })

// 时间轴点击事件
// function clickTimeLine (i, month) {
//   console.log(month)
//   rendTimeLine(i)
//   renderPage()
// }

$(function() {
  var startMonth = '2019-06'
  wholeMonthList = getWholeMonth(startMonth)
  rendList()
})
// function renderPage(param) {
//   //根据月份渲染数据
//   console.log('渲染页面,月份参数:' + param.month)
// }

function renderPage () {
  //todo 数据操作
  var width = $('#chart1').width()
  var legendData = ['推送量', '订购量']
  var yAxisData = ['CBSS', 'ESS', '微信', '外呼', '短信']
  var data = [
    {
      name: '推送量', data: [18203, 23489, 29034, 104970, 131744]
    },
    { name: '订购量', data: [19325, 23438, 31000, 121594, 134141] }
  ]
  rendHorizontalBarChart('chart1', legendData, yAxisData, data, width, 1.7)
  var pieData1 = [
    { value: 335, name: '高稳定度' },
    { value: 310, name: '中稳定度' },
    { value: 234, name: '低稳定度' }
  ]
  rendHealthyPieChart('chart2', pieData1, 98)
  var productData = [
    { value: 335, name: '大王卡' },
    { value: 310, name: '天王卡' },
    { value: 234, name: '畅悦冰淇淋79元' },
    { value: 335, name: '畅悦冰淇淋99元' },
    { value: 310, name: '智慧沃家' },
    { value: 234, name: '小王卡' }
  ]
  rendProductPieChart('chart3', productData)
  var lineAxisData1 = ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
  var lineData1 = [820, 32, 901, 934, 190, 1330, 1320]
  rendSingleLineChart('chart41', lineAxisData1, lineData1, width)
  var lineAxisData2 = ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
  var lineData2 = [40, 932, 01, 934, 1290, 130, 1320]
  rendSingleLineChart('chart42', lineAxisData2, lineData2, width)
  var lineAxisData3 = ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
  var lineData3 = [20, 932, 901, 934, 1290, 130, 320]
  rendSingleLineChart('chart43', lineAxisData3, lineData3, width)
}


