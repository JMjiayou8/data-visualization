$(function () {
  rendChart1()
  rendChart2()
  rendChart3()
  rendChart41()
  rendChart42()
  rendChart43()
})
var chart1, chart2, chart3, chart41, chart42, chart43
var width = $('#chart1').width()
function rendChart1 () {
  if (chart1 != null && chart1 != '' && chart1 != undefined) {
    chart1.dispose() //销毁
  }
  chart1 = echarts.init(document.getElementById('chart1'))
  var option = {
    color: ['#d0e3fe', '#639afe'],
    legend: {
      data: ['推送量', '订购量'],
      icon: 'circle',
      x: 'right'
    },
    grid: {
      left: 10,
      right: 10,
      top: 20,
      bottom: 20,
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01],
      axisLine: {
        show: false
      },
      axisLabel: { show: false },
      axisTick: { show: false },
      splitLine: { show: false }
    },
    yAxis: {
      type: 'category',
      data: ['CBSS', 'ESS', '微信', '外呼', '短信'],
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: '#e0e0e0'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#666'
        }
      }
    },
    series: [
      {
        name: '推送量',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744],
        barWidth: 12,
        label: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#666'
          }
        }
      },
      {
        name: '订购量',
        type: 'bar',
        data: [19325, 23438, 31000, 121594, 134141],
        barWidth: 12,
        label: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#666'
          }
        }
      }
    ]
  }
  chart1.setOption(option)
}
function rendChart2 () {
  if (chart2 != null && chart2 != '' && chart2 != undefined) {
    chart2.dispose() //销毁
  }
  chart2 = echarts.init(document.getElementById('chart2'))
  var option = {
    color: ['#69c0fe', '#6084fd', '#8abe78'],
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['30%', '80%'],
        center: ['35%', '50%'],
        // avoidLabelOverlap: false,
        data: [
          { value: 335, name: '高稳定度' },
          { value: 310, name: '中稳定度' },
          { value: 234, name: '低稳定度' }
        ],
        label: {
          color: '#666',
          formatter (obj) {
            return obj.name + '\n' + obj.percent + '%'
          }
        }
      }
    ]
  }
  chart2.setOption(option)
}
function rendChart3 () {
  if (chart3 != null && chart3 != '' && chart3 != undefined) {
    chart3.dispose() //销毁
  }
  chart3 = echarts.init(document.getElementById('chart3'))
  var option = {
    color: [
      '#f9383b',
      '#ffbf44',
      '#ffdc00',
      '#1ada6f',
      '#0092f1',
      '#12d0d2'
    ],
    series: [
      {
        name: '产品分析',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '50%'],

        data: [
          { value: 335, name: '大王卡' },
          { value: 310, name: '天王卡' },
          { value: 234, name: '畅悦冰淇淋79元' },
          { value: 335, name: '畅悦冰淇淋99元' },
          { value: 310, name: '智慧沃家' },
          { value: 234, name: '小王卡' }
        ],
        label: {
          color: '#666',
          formatter (obj) {
            return obj.name + '\n' + obj.percent + '%'
          }
        }
      }
    ]
  }
  chart3.setOption(option)
}
function rendChart41 () {
  if (chart41 != null && chart41 != '' && chart41 != undefined) {
    chart41.dispose() //销毁
  }
  $('#chart41').css('width', width + 'px')
  chart41 = echarts.init(document.getElementById('chart41'))
  var option = (option = {
    color: ['#1ada6f'],
    grid: {
      left: 50,
      right: 10,
      top: 20,
      bottom: 20
    },
    xAxis: {
      type: 'category',
      data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
      axisLine: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisLabel: {
        color: '#999999'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#999999'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10
      }
    ]
  })
  chart41.setOption(option)
}
function rendChart42 () {
  if (chart42 != null && chart42 != '' && chart42 != undefined) {
    chart42.dispose() //销毁
  }
  $('#chart42').css('width', width + 'px')
  chart42 = echarts.init(document.getElementById('chart42'))
  var option = (option = {
    color: ['#1ada6f'],
    grid: {
      left: 50,
      right: 10,
      top: 20,
      bottom: 20
    },
    xAxis: {
      type: 'category',
      data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
      axisLine: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisLabel: {
        color: '#999999'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#999999'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        data: [20, 92, 1, 4, 90, 10, 20],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10
      }
    ]
  })
  chart42.setOption(option)
}
function rendChart43 () {
  if (chart43 != null && chart43 != '' && chart43 != undefined) {
    chart43.dispose() //销毁
  }
  $('#chart43').css('width', width + 'px')
  chart43 = echarts.init(document.getElementById('chart43'))
  var option = (option = {
    color: ['#1ada6f'],
    grid: {
      left: 50,
      right: 10,
      top: 20,
      bottom: 20
    },
    xAxis: {
      type: 'category',
      data: ['4月', '5月', '6月', '7月', '8月', '9月', '10月'],
      axisLine: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#999999'
        }
      },
      axisLabel: {
        color: '#999999'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#999999'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    series: [
      {
        data: [80, 32, 01, 94, 290, 330, 120],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10
      }
    ]
  })
  chart43.setOption(option)
}
