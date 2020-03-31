$(function () {
  rendTimeLine(new Date().getMonth());//初始化时间轴区域
  rendPage()
})

// 时间轴点击事件
function clickTimeLine (i, month) {
  console.log(i, month)
  rendTimeLine(i)
  rendPage()
}

function rendPage () {
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
  rendHorizontalBarChart('chart1', legendData, yAxisData, data, 1.2)
  var data = [
    { value: 335, name: '高稳定度' },
    { value: 310, name: '中稳定度' },
    { value: 234, name: '低稳定度' }
  ]
  rendHealthyPieChart('chart2', data, 97)
  var pieWidth = $('#chart2').width()
  var pieData1 = [
    { "name": "兰州", "value": 25 },
    { "name": "嘉峪关", "value": 2 },
    { "name": "金昌", "value": 44 },
    { "name": "白银", "value": 6 },
    { "name": "天水", "value": 8 },
    { "name": "武威", "value": 57 },
    { "name": "张掖", "value": 15 },
    { "name": "酒泉", "value": 64 },
    { "name": "平凉", "value": 24 },
    { "name": "庆阳", "value": 16 },
    { "name": "定西", "value": 23 },
    { "name": "陇南", "value": 7 }
  ].sort(function (a, b) { return a.value - b.value })
  rendSplitPieChart('chart31', pieData1, pieWidth, 8.26, 10, 50)
  var pieData2 = [
    { "name": "兰州", "value": 25 },
    { "name": "嘉峪关", "value": 2 },
    { "name": "金昌", "value": 44 },
    { "name": "白银", "value": 6 },
    { "name": "天水", "value": 8 },
    { "name": "武威", "value": 57 },
    { "name": "张掖", "value": 15 },
    { "name": "酒泉", "value": 64 },
    { "name": "平凉", "value": 24 },
    { "name": "庆阳", "value": 16 },
    { "name": "定西", "value": 23 },
    { "name": "陇南", "value": 7 }
  ].sort(function (a, b) { return a.value - b.value })
  rendSplitPieChart('chart32', pieData2, pieWidth, 9, 10, 50)
  var pieData3 = [
    { "name": "兰州", "value": 25 },
    { "name": "嘉峪关", "value": 2 },
    { "name": "金昌", "value": 44 },
    { "name": "白银", "value": 6 },
    { "name": "天水", "value": 8 },
    { "name": "武威", "value": 57 },
    { "name": "张掖", "value": 15 },
    { "name": "酒泉", "value": 64 },
    { "name": "平凉", "value": 24 },
    { "name": "庆阳", "value": 16 },
    { "name": "定西", "value": 23 },
    { "name": "陇南", "value": 7 }
  ].sort(function (a, b) { return a.value - b.value })
  rendSplitPieChart('chart33', pieData3, pieWidth, 10, 10, 50)
  var pieData4 = [
    { "name": "兰州", "value": 25 },
    { "name": "嘉峪关", "value": 2 },
    { "name": "金昌", "value": 44 },
    { "name": "白银", "value": 6 },
    { "name": "天水", "value": 8 },
    { "name": "武威", "value": 57 },
    { "name": "张掖", "value": 15 },
    { "name": "酒泉", "value": 64 },
    { "name": "平凉", "value": 24 },
    { "name": "庆阳", "value": 16 },
    { "name": "定西", "value": 23 },
    { "name": "陇南", "value": 7 }
  ].sort(function (a, b) { return a.value - b.value })
  rendSplitPieChart('chart34', pieData4, pieWidth, 11, 10, 50)
  var pieData5 = [
    { "name": "兰州", "value": 25 },
    { "name": "嘉峪关", "value": 2 },
    { "name": "金昌", "value": 44 },
    { "name": "白银", "value": 6 },
    { "name": "天水", "value": 8 },
    { "name": "武威", "value": 57 },
    { "name": "张掖", "value": 15 },
    { "name": "酒泉", "value": 64 },
    { "name": "平凉", "value": 24 },
    { "name": "庆阳", "value": 16 },
    { "name": "定西", "value": 23 },
    { "name": "陇南", "value": 7 }
  ].sort(function (a, b) { return a.value - b.value })
  rendSplitPieChart('chart35', pieData5, pieWidth, 12, 10, 50)
  var xAxisData1 = ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
  var barData1 = [20, 92, 1, 4, 90, 10, 20]
  rendPicBarChart('chart41', xAxisData1, barData1, width)
  var xAxisData2 = ['4月', '5月', '6月', '7月', '8月', '9月', '10月']
  var barData2 = [2, 12, 16, 4, 10, 50, 23]
  rendPicBarChart('chart42', xAxisData2, barData2, width)
}

