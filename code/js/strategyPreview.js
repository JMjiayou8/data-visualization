$(function () {
  rendPage()
})

function rendPage () {
  //todo ajax请求渲染页面
  var data = [
    { text: '价值提升', max: 10, value: 1.5 },
    { text: '执行成本', max: 10, value: 3.6 },
    { text: '营销规模', max: 10, value: 8.3 },
  ]
  rendRadarChart('chart1', data)
  var lineAxisData1 = ['2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10']
  var lineData1 = [820, 32, 901, 934, 190, 1330, 1320]
  rendSingleLineChart2('chart2', lineAxisData1, lineData1)
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