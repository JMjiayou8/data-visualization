$(function () {
  rendPage()

})
function rendPage () {
  var width = $('#chart31').width()
  var data = [
    { value: 335, name: '高稳定度' },
    { value: 310, name: '中稳定度' },
    { value: 234, name: '低稳定度' }
  ]
  rendHealthyPieChart('chart1', data, 88)
  var productData = [
    { value: 335, name: '大王卡' },
    { value: 310, name: '天王卡' },
    { value: 234, name: '畅悦冰淇淋79元' },
    { value: 335, name: '畅悦冰淇淋99元' },
    { value: 310, name: '智慧沃家' },
    { value: 234, name: '小王卡' }
  ]
  rendProductPieChart('chart2', productData)
  var xAxisData = [
    '0-10元',
    '10-20元',
    '20-30元',
    '30-40元',
    '40-50元',
    '50-60元',
    '60-70元'
  ]
  var barData1 = [820, 932, 901, 934, 1290, 130, 1320]
  var barDataName1 = 'ARPR值'
  rendSingleBarChart('chart31', xAxisData, barData1, barDataName1, width)
  var barData2 = [20, 932, 901, 934, 90, 1330, 320]
  var barDataName2 = 'DOU值'
  rendSingleBarChart('chart32', xAxisData, barData2, barDataName2, width)
  var lineAxisData = ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
  var lineData = [820, 932, 901, 934, 1290, 1330, 1320]
  rendSingleLineChart('chart4', lineAxisData, lineData, width)
}
