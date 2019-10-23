$(function () {
  rendChart1()
  rendChart2()
  rendChart3()
  rendChart41()
  rendChart42()

})
var chart1, chart2, chart3, chart41, chart42
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
  chart3 = echarts.init(document.getElementById('chart31'))
  var option = {
    backgroundColor: '#fff',
    visualMap: {
      type: 'piecewise',
      right: '10%',
      y: 'middle',
      align: 'left',
      itemWidth: 35,
      itemHeight: 10,
      pieces: [
        { min: 50, label: '高', color: '#ee615f' },
        { min: 10, max: 50, label: '中', color: '#ffa029' },
        { max: 10, label: '低', color: '#6bbe52' }
      ]
    },
    series: [
      {
        name: '产品分析',
        type: 'pie',
        radius: ['40%', '80%'],
        center: ['50%', '50%'],
        minAngle: 30,
        data: [
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
        ].sort(function (a, b) { return a.value - b.value }),
        label: {
          color: '#fff',
          position: 'inside',
          formatter (obj) {
            return obj.name
          }
        },
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 4
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
    grid: {
      left: 100,
      right: 100,
      top: 20,
      bottom: 20
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: 100,
      splitNumber: 10,
      axisLabel: {
        color: '#999',
        formatter: function (name) {
          return name + '%'
        }
      },
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#999'
        }
      }
    },
    yAxis: [{
      type: "category",
      inverse: false,
      data: ["60以上", "50-60", "40-50", "30-40", "20-30", '10-20'],
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        margin: 35,
        textStyle: {
          color: "#999",
          fontSize: 14,
        }

      }
    }
    ],
    series: [
      {
        z: 4,
        type: "pictorialBar",
        symbolSize: ['30', '30'],
        symbolRepeat: "fixed",
        symbol: echartsConfig.barImg,
        itemStyle: {
          opacity: 0.5
        },
        data: [1, 1, 1, 1, 1, 1],
      }, {
        z: 6,
        type: "pictorialBar",
        symbolSize: ['30', '30'],
        animation: true,
        symbol: echartsConfig.barImg,
        symbolRepeat: "fixed",
        symbolClip: true,
        symbolPosition: "start",
        symbolOffset: [0, 0],
        itemStyle: {
          opacity: 1
        },
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#ec3d20',
              fontSize: 14,
              fontWeight: 500

            },
            formatter: function (obj) {
              return obj.value + '%'
            },
            position: "right",
            offset: [35, 0]

          }
        },
        data: [13.9, 25.2, 31, 19, 28.1, 4]
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

