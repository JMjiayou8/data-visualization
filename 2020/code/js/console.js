layui.use([ 'laytpl', 'table', 'element'], function () {
  var  laytpl = layui.laytpl,
    table = layui.table,
    element = layui.element;
  var chnlList = [], chnlData = [], groupNum = 0, chnlGroupIndex = 0, currentChnl = {}, paramData = {};
  // 活跃触点
  function renderActiveWrap () {
    var activeData = {
      configMap: [
        {
          key: 'prop1',
          text: '覆盖活动',
          span: 12,
          color: '#f6f4df',
          type: 'num'
        },
        {
          key: 'prop2',
          text: '日均任务',
          span: 6,
          color: '#e7f3f0',
          type: 'num'
        },
        {
          key: 'prop3',
          text: '月均任务',
          span: 6,
          color: '#e7f3f0',
          type: 'num'
        },
        {
          key: 'prop4',
          text: '当日触达',
          span: 6,
          color: '#e5e7f8',
          type: 'num'
        },
        {
          key: 'prop5',
          text: '当月触达',
          span: 6,
          color: '#e5e7f8',
          type: 'num'
        },
        {
          key: 'prop6',
          text: '触达率',
          span: 12,
          color: '#f8efe5',
          type: 'per'
        }
      ],
      data: {
        prop1: 500,
        prop2: 800,
        prop3: 900,
        prop4: 1000,
        prop5: 600,
        prop6: 16
      }
    }
    var getTpl = activeHtml.innerHTML, wrap = document.getElementById('activeWrap');
    laytpl(getTpl).render(activeData, function (html) {
      wrap.innerHTML = html;
      element.render()
    });
  }

  // 任务量饼图
  function rendPieChart1 (id, data, totalNum) {
    var chart1 = echarts.init(document.getElementById(id))
    var option = {
      color: ['#fbb467', '#5ea7da', '#e47089', '#c0af9b', '#7c9f70'],
      legend: {
        show: true,
        x: 'center',
        y: 'bottom',
        icon: 'circle',

      },
      series: [
        {
          name: '任务量',
          type: 'pie',
          radius: ['50%', '60%'],
          center: ['50%', '45%'],
          startAngle: 180,
          data: data,
          label: {
            show: false,
            color: '#666',
            formatter (obj) {
              return obj.percent + '%'
            }
          },
          itemStyle: { //图形样式
            normal: {
              borderColor: '#ffffff',
              borderWidth: 2,
            },
          },
          emphasis: {
            label: {
              show: true
            }
          }
        }
      ]
    }
    chart1.setOption(option)
    chart1.dispatchAction({//默认高亮'短信'
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 0
    });
  }
  // 触达率饼图
  function rendPieChart2 (id, data) {
    var chart1 = echarts.init(document.getElementById(id))
    var sum = 0
    var dataOption = [];
    for (var i = 0; i < data.length; i++) {
      sum = sum + data[i].value
    }
    for (var i = 0; i < data.length; i++) {
      dataOption.push({
        data: data[i].value,
        value: data[i].value,
        name: data[i].name,
        itemStyle: {
          normal: {
            borderWidth: 10,
            borderColor: '#fff'
          }
        }
      });
    }
    dataOption.push({
      value: sum,
      name: '',
      itemStyle: {
        normal: {
          color: '#fff'
        }
      }
    })
    var startAngle = 180,
      radius = [50, 70],
      center = ['50%', '70%'];
    var seriesObj = [{
      name: '',
      type: 'pie',
      radius: radius,
      center: center,
      startAngle: startAngle,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      emphasis: {
        label: {
          show: true,
          position: 'outside',
          fontSize: 12,
          color: '#555',
          formatter: function (params) {
            var percent = 0;
            percent = ((params.value / sum) * 100).toFixed(0);
            if (params.name !== '') {
              return percent + '%';
            } else {
              return '';
            }
          }
        },
        labelLine: {
          length: 30,
          length2: 60,
          show: true,

        },
      },
      data: dataOption
    }, {
      name: '',
      type: 'pie',
      radius: radius,
      center: center,
      startAngle: startAngle,
      label: {
        show: false,
      },
      labelLine: {
        show: false,
      },
      data: dataOption
    }];
    option = {
      color: ['#8174c3', '#edab6a'],
      backgroundColor: '#fff',
      // animation: false,
      legend: {
        show: true,
        x: 'center',
        y: 'bottom',
        icon: 'circle'
      },
      series: seriesObj,
    }
    chart1.setOption(option)
    chart1.dispatchAction({//默认高亮'短信'
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: 1
    });
  }
  // 绘制图形
  function renderChart () {
    var data1 = [
      { value: 335, name: '短信' },
      { value: 310, name: '外呼' },
      { value: 234, name: '微信' },
      { value: 234, name: '弹窗' },
      { value: 234, name: '支付宝' },
    ]
    rendPieChart1('chart1', data1)
    var data2 = [
      { value: 335, name: '短信' },
      { value: 210, name: '外呼' },
      { value: 245, name: '微信' },
      { value: 134, name: '弹窗' },
      { value: 1234, name: '支付宝' },
    ]
    rendPieChart1('chart2', data2)
    var data3 = [{
      'name': '未适配活动',
      'value': 1234
    },
    {
      'name': '已适配活动',
      'value': 4700
    }];
    rendPieChart2('chart3', data3)
    var data4 = [{
      'name': '未适配活动',
      'value': 3234
    },
    {
      'name': '已适配活动',
      'value': 4700
    }];
    rendPieChart2('chart4', data4)
  }
  //处理触点数据
  function getChnlArr (data) {
    var arr = [];
    var group = Math.ceil(data.length / 7);
    for (var i = 0; i < group; i++) {
      arr.push(data.slice(i * 7, (i + 1) * 7))
    }
    return arr
  }
  //点击单个触点
  window.setCurrentChnl = function (id) {
    currentChnl = id;
    getChnlData()
  }
  
  // 切换触点组
  window.changeGroupIndex = function (tag) {
    if (tag == 'prev' && chnlGroupIndex > 0) {
      chnlGroupIndex--;
      renderSingleChnlWrap()
    }
    if (tag == 'next' && chnlGroupIndex < chnlData.length - 1) {
      chnlGroupIndex++;
      renderSingleChnlWrap()
    }
  }
  // 搜索触点
  window.searchChnl = function () {
    for (var i = 0; i < groupNum; i++) {
      var item = chnlData[i]
      for (var j = 0; j < item.length; j++) {
        if ($('#searchName').val() == item[j].text) {
          currentChnl = item[j].id
          chnlGroupIndex = i;
          getChnlData()
          return
        }
      }
    }
  }
  //获取触点列表数据
  function getChnlArrData () {
    $.ajax({
      url: '/mockData/chnl.json',
      success: function (res) {
        chnlList = res;
        chnlData = getChnlArr(chnlList);
        groupNum = chnlData.length;
        chnlGroupIndex = 0;
        currentChnl = chnlList[0].id;
        getChnlData()
      }
    })
  }
  //获取总览数据和表格数据
  function getChnlData () {
    $.ajax({
      url: '/mockData/param.json',
      data: {
        chnlId: currentChnl
      },
      success: function (res) {
        paramData = res;
        table.render({
          elem: '#table1',
          url: '/mockData/table.json',
          where: {
            chnlId: currentChnl
          },
          cols: [[
            { field: 'param1', title: '地市' },
            { field: 'param2', title: '日任务量' },
            { field: 'param3', title: '月任务量' },
            { field: 'param4', title: '日触达量' },
            { field: 'param5', title: '月触达量', },
            {
              field: 'param6', title: '触达率', templet: function (d) {
                return d.param6 + '%'
              }
            },
          ]],
          page: {
            layout: ['prev', 'page', 'next', 'skip'], //自定义分页布局
            theme: '#f0912d',
          }
        });
        renderSingleChnlWrap()
      }
    })
  }
  // 单触点区域
  function renderSingleChnlWrap () {
    var renderData = {
      paramMap: [
        {
          key: 'param1',
          text: '当月活动数',
          type: 'num'
        },
        {
          key: 'param2',
          text: '日任务量',
          type: 'num'
        }, {
          key: 'param3',
          text: '月任务量',
          type: 'num'
        }, {
          key: 'param4',
          text: '日触达量',
          type: 'num'
        }, {
          key: 'param5',
          text: '月触达量',
          type: 'num'
        }, {
          key: 'param6',
          text: '触达率',
          type: 'per'
        }
      ],
      chnlList: chnlData,
      groupNum: chnlData.length,
      chnlGroupIndex: chnlGroupIndex,
      currentChnl: currentChnl,
      paramData: paramData
    }
    var getTpl = paramHtml.innerHTML, wrap = document.getElementById('paramWrap');
    laytpl(getTpl).render(renderData, function (html) {
      wrap.innerHTML = html;
      element.render()
    });
  }
  $(function () {
    renderActiveWrap()
    renderChart()
    getChnlArrData()
  })
})