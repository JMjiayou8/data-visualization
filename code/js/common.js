// tab切换
$('.tab-head-item').click(function () {
  var parent = $(this).parents('.normal-part')
  parent.find('.tab-head-item').removeClass('active')
  $(this).addClass('active')
  parent.find('.tab-pane').hide()
  var paneBody = $(this).attr('role')
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
var curMonth = new Date().getMonth()
function rendTimeLine (cur) {
  curMonthIndex = cur;
  var timeTemplate = '<li class="timeLine-item {active}" {onclick} ><p>{month}</p><i></i></li>'
  var arr = []
  for (var i = 0; i < 12; i++) {
    var month = new Date().getFullYear() + '-' + (i < 9 ? '0' + (i + 1) : i + 1)
    arr.push(timeTemplate.replace(/\{month\}/g, month).replace(/\{index\}/g, + i).replace(/\{active\}/g, i == cur ? 'active' : '')
      .replace(/\{onclick\}/g, i > curMonth ? '' : 'onclick="clickTimeLine(' + i + ',\'' + month + '\')"'))
  }
  $('.timeLine-slide').html(arr.join(''))
}
function prevTime () {
  curMonthIndex = (curMonthIndex + curMonth) % (curMonth + 1);
  rendTimeLine(curMonthIndex)
}
function nextTime () {
  curMonthIndex = (curMonthIndex + 1) % (curMonth + 1);
  rendTimeLine(curMonthIndex)
}

//设置指标配置框
function showConfigBox () {
  if ($('.config-list:hidden').length) {
    $('.config-list').show();
    rendConfigWrap()
  } else {
    $('.config-list').hide();
  }
  $('.config-top').toggleClass('active')
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
// 评估页面图表title设置
function getTitleConfig (title) {
  return {
    show: !!title,
    text: title,
    x: 'center',
    y: 'bottom',
    textStyle: {
      color: '#666',
      fontSize: 16
    },
    backgroundColor: 'rgba(236, 169, 114, 0.212)',
    borderColor: 'rgb(240, 145, 45)',
    borderWidth: 1,
    borderRadius: 14,
    padding: [8, 50, 8, 50]
  }
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
function rendSplitPieChart (id, data, width, totalNum, minValue, maxValue) {
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
        { min: maxValue, label: '高', color: '#ee615f' },
        { min: minValue, max: maxValue, label: '中', color: '#ffa029' },
        { max: minValue, label: '低', color: '#6bbe52' }
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
// 目标用户ARPU值分布分析
function rendAssessPie (id, data, title) {
  if(document.getElementById(id)){
    let width=parseFloat(getComputedStyle(document.getElementById(id)).width) ;
    var center = ['25%', '45%']//饼图中心点位置
    var radius1=['20%', '62%'],radius2=['64%', '65%'];//饼图半径
    var legendX='right',legendY='center';//图例位置
    if(width<520){//图形宽度临界值
       center = ['50%', '25%']
       legendX='center';legendY='50%'
       radius1=['20%','40%'];radius2=['42%','43%']
       $('#' + id).height('400px')
    }
    var chart8 = echarts.init(document.getElementById(id))
    var pieLegendStyle = {
      rich: {
        title: {
          width: 120,//右侧图例名称长度
          fontSize: 16,
          color: "#818181",
          padding: [0, 10]
        },
        value: {
          fontSize: 18,
          color: "#7e26a7",
          padding: [0, 10]
        }
      }
    }
    var option = {
      title: getTitleConfig(title),
      color: ['#4381d2', '#ba78d6', '#e1b941', '#56be97'],
      legend: { 
        x: legendX,
        y: legendY,
        orient: 'vertical',
        align: 'left',
        itemGap: 15,
        itemWidth: 15,
        itemHeight: 15,
        icon: 'rect',
        formatter: function (name) {
          var value = data.find(item => item.name == name).value;
          var per = data.find(item => item.name == name).perNum;
          return "{title|" + name + "}{value|" + value + '万元' + "}{value|" + per + '%' + "}"
        },
        textStyle: pieLegendStyle,
  
      },
      calculable: true,
      series: [
        {
          name: title,
          type: 'pie',
          radius: radius1,
          center: center,
          roseType: 'radius',
          animation:false,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          data: data
        },
        {
          name: 'rise',
          type: 'pie',
          radius: radius2,
          center: center,
          animation:false,
          roseType: 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            color: '#bbc1cd'
          },
          data: [
            { value: 1, name: '' },
          ]
        },
  
      ]
    };
    chart8.setOption(option)
    chart8.resize() 
  }
  
}
//目标用户流量分析
function rendSingleBarChart2 (id, xAxisData, data, title) {
  if(document.getElementById(id)){
    var chart8 = echarts.init(document.getElementById(id))
    // $('#' + id).width(width + 'px')
    var option = {
      color: ['#e38bb8'],
      title: getTitleConfig(title),
      grid: {
        left: 50,
        right: 10,
        top: 20,
        bottom: 60
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
        axisTick: {
          lineStyle: {
            color: '#999999'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#999999'
          }
        },
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
          name: title,
          data: data,
          type: 'bar',
          animation:false,
          barWidth: 30,
          itemStyle: {
            barBorderRadius: [5, 5, 0, 0]
          }
        }
      ]
    }
    chart8.setOption(option)
  }

}
// 目标用户年龄段分布分析
function rendMultiLineChart (id, xAxisData, data, title) {
  if(document.getElementById(id)){
    var chart9 = echarts.init(document.getElementById(id))
    var series = []
    for (var i = 0; i < data.length; i++) {
      series.push({
        name: data[i].name,
        type: 'line',
        data: data[i].data,
        animation:false,
        symbolSize: 10,
        lineStyle: {
          width: 2
        }
      })
    }
    var option = {
      color: ['#2cb634', '#cfda4c', '#da993f'],
      title: getTitleConfig(title),
      grid: {
        left: 50,
        right: 10,
        top: 20,
        bottom: 60
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
        axisTick: {
          lineStyle: {
            color: '#999999'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#999999'
          }
        },
        axisLabel: {
          color: '#999999'
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      series: series
    }
    chart9.setOption(option)
  }

 
}
// 雷达图
function rendRadarChart (id, data) {
  var chart10 = echarts.init(document.getElementById(id))
  var nums = []
  for (var i = 0; i < data.length; i++) {
    nums.push(data[i].value)
  }
  var pieLegendStyle = {
    rich: {
      title: {
        width: 80,
        height: 50,
        fontSize: 16,
        color: "#818181",
        padding: [0, 20]
      },
      value: {
        width: 50,
        height: 50,
        fontSize: 18,
        color: "#f0912d",
        padding: [0, 20]
      }
    }
  }
  var option = {
    color: ['#a2badf'],
    legend: {
      x: '60%',
      y: 'center',
      itemWidth: 0,
      formatter: function () {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
          arr.push("{title|" + data[i].text + '得分:' + "}{value|" + data[i].value + "}\n")
        }
        return arr.join('')
      },
      textStyle: pieLegendStyle,
    },

    radar: [
      {
        indicator: data,
        center: ['30%', '65%'],
        radius: 100,
        axisLine: {
          lineStyle: {
            color: '#ededee',
            type: 'dashed'
          }
        },
        splitLine: {
          lineStyle: {
            color: '#a1b1cc',
            type: 'dashed'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['#fff']
          }
        },
        name: {
          color: '#666666'
        }
      }
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: { normal: { areaStyle: { type: 'default' } } },
        label: {
          show: true,
          color: '#666'
        },
        data: [
          {
            value: nums,
            name: '某软件'
          }
        ]
      },
    ]
  };
  chart10.setOption(option)
}
function rendSingleLineChart2 (id, xAxisData, data) {
  var chart11 = echarts.init(document.getElementById(id))
  var option = {
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
    },
    series: [
      {
        data: data,
        type: 'line',
        symbol: 'emptycircle',
        symbolSize: 10
      }
    ]
  }
  chart11.setOption(option)

}
/**
 * 获取url参数
 * @param {*} url 
 * getUrlParam('?saleId=lwac00&&saleName=%E8%AF%BB%E4%B9%A6%E9%80%81%E6%B5%81%E9%87%8F')======>>>{saleId: "lwac00", saleName: "读书送流量"}
 */
function getUrlParam (url) {
  var searchUrl = (url || location.search).substr(1);
  var paramObj = {}
  if (searchUrl) {
    var arr = searchUrl.split('&&');
    for (var i = 0; i < arr.length; i++) {
      var a = arr[i].split('=')
      paramObj[decodeURI(a[0])] = decodeURI(a[1])
    }
  }
  return paramObj
}
function toQueryPair (key, value) {
  if (typeof value == 'undefined') {
    return key;
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}
/**
 * 拼接url参数
 * @param {*} param 
 * setUrlParam({a:1,b:2})=====>"a=1&&b=2"
 */
function setUrlParam (param) {
  var arr = []
  if (param) {
    for (var key in param) {
      key = encodeURIComponent(key);
      var values = param[key];
      if (values && values.constructor == Array) {//数组
        var queryValues = [];
        for (var i = 0, len = values.length, value; i < len; i++) {
          value = values[i];
          queryValues.push(toQueryPair(key, value));
        }
        arr = arr.concat(queryValues);
      } else { //字符串
        arr.push(toQueryPair(key, values));
      }
    }
  }
  return arr.join('&&')
}
