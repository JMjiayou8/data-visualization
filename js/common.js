// tab切换
$('.tab-head-item').click(function () {
  var parent = $(this).parents('.normal-part')
  parent.find('.tab-head-item').removeClass('active')
  $(this).addClass('active')
  parent.find('.tab-pane').hide()
  let paneBody = $(this).attr('role')
  $('#tab-' + paneBody).show()
})


//按钮式tab
$('.tab-item').click(function () {
  var parent = $(this).parents('.normal-btn-tab')
  parent.find('.tab-item').removeClass('active')
  $(this).addClass('active')
})

// 时间轴区域
var curMonthIndex;
function rendTimeLine (cur) {
  curMonthIndex = cur;
  var timeTemplate = '<li class="timeLine-item {active}" onclick="clickTimeLine({index})"><p>{month}</p><i></i></li>'
  var arr = []
  for (var i = 0; i < 12; i++) {
    arr.push(timeTemplate.replace(/\{month\}/g, new Date().getFullYear() + '-' + (i < 9 ? '0' + (i + 1) : i + 1)).replace(/\{index\}/g, + i).replace(/\{active\}/g, i == cur ? 'active' : ''))
  }
  $('.timeLine-slide').html(arr.join(''))
}
function prevTime () {
  curMonthIndex = (curMonthIndex + 11) % 12;
  rendTimeLine(curMonthIndex)
}
function nextTime () {
  curMonthIndex = (curMonthIndex + 1) % 12;
  rendTimeLine(curMonthIndex)
}


// 全局图标设置
var echartsConfig = {
  barImg: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAoCAYAAACb3CikAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE5RTdGNkVGRUQ1NzExRTlBNjQ3QzU0QUMxNjMzOEEzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE5RTdGNkYwRUQ1NzExRTlBNjQ3QzU0QUMxNjMzOEEzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTlFN0Y2RURFRDU3MTFFOUE2NDdDNTRBQzE2MzM4QTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTlFN0Y2RUVFRDU3MTFFOUE2NDdDNTRBQzE2MzM4QTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5DN6hBAAAHx0lEQVR42rSXe2xb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',
  lineConfig: {
    color: ['#1ada6f']
  },
  healtyPieColor: ['#69c0fe', '#6084fd', '#8abe78'],
  productPieColor: [
    '#f9383b',
    '#ffbf44',
    '#ffdc00',
    '#1ada6f',
    '#0092f1',
    '#12d0d2'
  ],
  singleBarColor: ['#0092f1'],
  horizontalBarColor: ['#d0e3fe', '#639afe']
}

// 健康度分析饼图
function rendHealthyPieChart (id, data, totalNum) {
  var chart1 = echarts.init(document.getElementById(id))
  var option = {
    color: echartsConfig.healtyPieColor,
    title: {
      x: '34%',
      y: '35%',
      text: totalNum,
      textStyle: {
        color: '#7fbf54',
        fontSize: 48
      },
      textAlign: 'center',
      subtext: '健康度'
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['35%', '50%'],
        data: data,
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
// 产品分析饼图
function rendProductPieChart (id, data) {

  var chart2 = echarts.init(document.getElementById(id))
  var option = {
    color: echartsConfig.productPieColor,
    series: [
      {
        name: '产品分析',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '50%'],

        data: data,
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
// 单一柱状图
function rendSingleBarChart (id, xAxisData, data, dataName, width) {
  var chart3 = echarts.init(document.getElementById(id))
  $('#' + id).width(width + 'px')
  var option = {
    color: echartsConfig.singleBarColor,
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
      data: xAxisData,
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
        name: dataName,
        data: data,
        type: 'bar',
        barWidth: 30,
        itemStyle: {
          barBorderRadius: [5, 5, 0, 0]
        }
      }
    ]
  }
  chart3.setOption(option)
  chart3.resize()
}
//单一折线图
function rendSingleLineChart (id, xAxisData, data, width) {
  var chart4 = echarts.init(document.getElementById(id))
  $('#' + id).width(width + 'px')
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
      data: xAxisData,
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
        data: data,
        type: 'line',
        symbol: 'circle',
        symbolSize: 10
      }
    ]
  })
  chart4.setOption(option)
  chart4.resize()
}
// 水平柱图
function rendHorizontalBarChart (id, legendData, yAxisData, data, totalNum) {
  var chart5 = echarts.init(document.getElementById(id))
  var option = {
    color: echartsConfig.horizontalBarColor,
    title: {
      x: 'center',
      y: '0',
      text: '{b|总转化率}{a|' + totalNum + '}{b|%}',
      textStyle: {
        fontSize: 0,
        rich: {
          a: {
            color: '#ff9f0e',
            fontSize: 18,
            padding: [0, 10, 0, 10]
          },
          b: {
            color: '#999',
            fontSize: 16,
          }
        }
      },
      textAlign: 'center',
      vetextVerticalAlign: 'bottom'
    },
    legend: {
      data: legendData,
      icon: 'circle',
      x: 'right'
    },
    grid: {
      left: 0,
      right: 10,
      top: 40,
      bottom: 0,
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
      data: yAxisData,
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
    series: []
  }
  for (var i = 0; i < data.length; i++) {
    option.series.push({
      name: data[i].name,
      type: 'bar',
      data: data[i].data,
      barWidth: 12,
      label: {
        show: true,
        position: 'right',
        textStyle: {
          color: '#666'
        }
      }
    })
  }

  chart5.setOption(option)
}
// 分隔式饼图
function rendSplitPieChart (id, data, width, totalNum) {
  var chart6 = echarts.init(document.getElementById(id))
  $('#' + id).width(width + 'px')

  var option = {
    title: {
      x: '50%',
      y: '40%',
      text: '{a|' + totalNum + '}{b|元}',
      textStyle: {
        fontSize: 0,
        rich: {
          a: {
            color: '#ff9f0e',
            fontSize: 26,
            lineHeight: 40,
            padding: [0, 10, 0, 0]
          },
          b: {
            color: '#999',
            lineHeight: 40,
            fontSize: 16,

          }
        }
      },
      textAlign: 'center',
      vetextVerticalAlign: 'bottom'

    },
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
        data: data,
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
  chart6.setOption(option)
  chart6.resize()
}
// 图片式柱图
function rendPicBarChart (id, yAxisData, data, width) {
  var chart7 = echarts.init(document.getElementById(id))
  $('#' + id).width(width + 'px')
  var bgData = []
  for (var i = 0; i < data.length; i++) {
    bgData.push(1)
  }
  var option = {
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
      data: yAxisData,
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
        data: bgData,
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
        data: data
      }
    ]
  }
  chart7.setOption(option)
  chart7.resize()
}