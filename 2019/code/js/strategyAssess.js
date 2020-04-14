
layui.use(['layer'], function () {
  var layer = layui.layer;

  //配置数据
  var configData = [
    { index: 1, text: '套餐类型', disabled: false, partTitle: '套餐类型分析' ,titleDesc:'套餐类型分析套餐类型分析'},
    { index: 2, text: 'ARPU值', disabled: false, partTitle: '目标用户ARPU值分布分析',titleDesc:'目标用户ARPU值分布分析目标用户ARPU值分布分析' },
    { index: 3, text: '流量', disabled: false, partTitle: '目标用户流量分析' ,titleDesc:'目标用户流量分析目标用户流量分析' },
    { index: 4, text: '主叫次数占比', disabled: false, partTitle: '主叫次数占比分析' ,titleDesc:'主叫次数占比分析主叫次数占比分析' },
    { index: 5, text: '入网时长', disabled: false, partTitle: '入网时长分析' ,titleDesc:'入网时长分析入网时长分析' },
    { index: 6, text: '用户状态', disabled: false, partTitle: '用户状态分析',titleDesc:'用户状态分析用户状态分析'  },
    { index: 7, text: '稳定度', disabled: false, partTitle: '稳定度分析' ,titleDesc:'稳定度分析稳定度分析' },
    { index: 8, text: '活跃度', disabled: false, partTitle: '活跃度分析',titleDesc:'活跃度分析活跃度分析'  },
    { index: 9, text: '年龄', disabled: false, partTitle: '目标用户年龄段分布分析' ,titleDesc:'目标用户年龄段分布分析目标用户年龄段分布分析' },
    { index: 10, text: '性别', disabled: true, partTitle: '性别分析' ,titleDesc:'性别分析性别分析' },
    { index: 11, text: '地市', disabled: true, partTitle: '地市分析',titleDesc:'地市分析地市分析'  },
    { index: 12, text: '用户等级', disabled: true, partTitle: '用户等级分析',titleDesc:'用户等级分析用户等级分析'  },
  ]
  //页面显示模块index
  var showPartArr = [2, 3, 9];
  // 配置按钮模块
  var templeLi = '<li class="config-item fl {isChoose}"><button {onclick} {disabled}>{text}</button></li>'
  // 图表模块
  var partHtml = '<div class="normal-part"  style="display:block;">' +
    '<div class="part-title-wrap"><p class="part-title chart-part-title"><span>{partTitle}</span><i class="ask-icon" data-desc={titleDesc}></i></p></div>' +
    '<div class="part-body clearfix"><div id="{chartId}1" class="fl" style="width: 50%;height: 280px;"></div><div id="{chartId}2" class="fl" style="width: 50%;height: 280px;"></div></div></div>'

  //详细数据点击事件
  window.toDetail=function (title) {
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

    var linebarData = [
      { name: '1', data: [220, 132, 1, 94, 90, 10, 130] },
      { name: '2', data: [120, 92, 91, 34, 190, 130, 120] },
      { name: '3', data: [20, 32, 90, 34, 290, 30, 320] }
    ]
    rendMultiLineChart('chart31', xAxisData, linebarData, '本策略')
    rendMultiLineChart('chart32', xAxisData, linebarData, '相似策略——充值送流量')

    rendSingleBarChart2('chart41', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart42', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart51', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart52', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart61', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart62', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart61', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart62', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart71', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart72', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart81', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart82', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart91', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart92', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart101', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart102', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart111', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart112', xAxisData, barData, '相似策略——充值送流量')

    rendSingleBarChart2('chart121', xAxisData, barData, '本策略')
    rendSingleBarChart2('chart122', xAxisData, barData, '相似策略——充值送流量')

    

  }

  // 额外数据渲染
  window.rendOtherMap=function (otherMap) {
    $('#simaillerRate1').html(otherMap.simillerRate || '');
    $('#simaillerRate2').html(otherMap.simillerRate || '');
    $('#simaillerRate3').html(otherMap.simillerRate || '');
    $('#score1').html(otherMap.saleScore || '0');
    $('#score2').html(otherMap.saleScore || '0');
    $('#score3').html(otherMap.saleScore || '0');
    $('#productName1').html(otherMap.saleName || '');
    $('#productName2').html(otherMap.saleName || '');
    $('#productName3').html(otherMap.saleName || '');
    $('#execDate1').html(otherMap.execDate || '');
    $('#execDate2').html(otherMap.execDate || '');
    $('#execDate3').html(otherMap.execDate || '');
  }
  // 渲染配置列表
  window.rendConfigWrap = function () {
    var arr = [];
    for (var i = 0; i < configData.length; i++) {
      var item = configData[i];
      arr.push(templeLi.replace(/\{text\}/g, item.text)
        .replace(/\{onclick\}/g, 'onclick="choseConfigItem(\'' + item.index + '\')"')
        .replace(/\{isChoose\}/g, showPartArr.indexOf(+item.index) > -1 ? 'active' : '')
        .replace(/\{disabled\}/g, item.disabled ? 'disabled=true' : ''))
    }
    $('.config-list').html(arr.join(''))

  }
  window.rendChartPart = function () {
    var htmlArr = []
    for (var i = 0; i < showPartArr.length; i++) {
      var item = configData[showPartArr[i] - 1];
      htmlArr.push(partHtml.replace(/\{partTitle\}/, item.partTitle)
      .replace(/\{chartId\}/g, 'chart' + item.index)
      .replace(/\{titleDesc\}/g, item.titleDesc))
    }
    $('.config-part-list').html(htmlArr.join(''));
    $(".ask-icon").hover(function () {
      layer.tips($(this).data('desc'), this, {
        tips: 1
      });
    }, function () {
      layer.closeAll()
    });
    renderPage()
  }
  // 单击配置单项
  window.choseConfigItem = function (id) {
    var index = showPartArr.indexOf(+id)
    if (index > -1) {
      showPartArr.splice(index, 1)
    } else {
      showPartArr.push(+id)
    }
    rendChartPart();
    rendConfigWrap();
  }

  $(function () {
    rendChartPart()
  })


})
