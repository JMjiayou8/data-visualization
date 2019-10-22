$(function () {
  rendChart1()
  rendChart2()
  rendChart31()
  rendChart32()
  rendChart4()
})
var chart1, chart2, chart31, chart32, chart4
var width = $('#chart31').width()
function rendChart1 () {
  if (chart1 != null && chart1 != '' && chart1 != undefined) {
    chart1.dispose() //销毁
  }
  chart1 = echarts.init(document.getElementById('chart1'))
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
  chart1.setOption(option)
}
function rendChart2 () {
  if (chart2 != null && chart2 != '' && chart2 != undefined) {
    chart2.dispose() //销毁
  }
  chart2 = echarts.init(document.getElementById('chart2'))
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
  chart2.setOption(option)
}
function rendChart31 () {
  if (chart31 != null && chart31 != '' && chart31 != undefined) {
    chart31.dispose() //销毁
  }
  chart31 = echarts.init(document.getElementById('chart31'))
  var option = {
    color: ['#0092f1'],
    legend: {
      right: 0,
      itemWidth: 14,
      itemHeight: 2
    },
    grid: {
      left: 50,
      right: 10,
      top: 50,
      bottom: 20
    },
    xAxis: {
      type: 'category',
      data: [
        '0-10元',
        '10-20元',
        '20-30元',
        '30-40元',
        '40-50元',
        '50-60元',
        '60-70元'
      ],
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
        name: 'ARPR值',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    ]
  }
  chart31.setOption(option)
}
function rendChart32 () {
  if (chart32 != null && chart32 != '' && chart32 != undefined) {
    chart32.dispose() //销毁
  }
  $('#chart32').css('width', width + 'px')
  chart32 = echarts.init(document.getElementById('chart32'))
  var option = {
    color: ['#0092f1'],
    legend: {
      right: 0,
      itemWidth: 14,
      itemHeight: 2
    },
    grid: {
      left: 50,
      right: 10,
      top: 50,
      bottom: 20
    },
    xAxis: {
      type: 'category',
      data: [
        '0-10元',
        '10-20元',
        '20-30元',
        '30-40元',
        '40-50元',
        '50-60元',
        '60-70元'
      ],
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
        name: 'ARPR值',
        data: [82, 332, 101, 734, 190, 130, 320],
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    ]
  }
  chart32.setOption(option)
}
function rendChart4 () {
  if (chart4 != null && chart4 != '' && chart4 != undefined) {
    chart4.dispose() //销毁
  }
  chart4 = echarts.init(document.getElementById('chart4'))
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
  chart4.setOption(option)
}
