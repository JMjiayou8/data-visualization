layui.use(['laytpl', 'jquery', 'table'], function () {
  var laytpl = layui.laytpl,
    $ = layui.jquery,
    table = layui.table;
  table.render({
    elem: '#table1',
    data: [],
    cols: [[
      { field: 'param1', title: '用户编码' },
      { field: 'param2', title: 'ARPU' },
      { field: 'param3', title: '当前套餐' },
      { field: 'param4', title: '上月语音情况' },
      { field: 'param5', title: '上月流量', },
      { field: 'param6', title: '是否有宽带' },
      { field: 'param7', title: '推荐产品明细', templet: '#productList', width: 300 },
    ]],
    page: {
      layout: ['prev', 'page', 'next', 'skip'], //自定义分页布局
      theme: '#f0912d',
    }
  });
  var queryParam = {}//搜索参数
  window.chooseParam = function (obj, key, val) {
    $(obj).siblings().removeClass('active');
    $(obj).toggleClass('active');
    queryParam[key] = $(obj).hasClass('active') ? val : ''
    // queryParam[key] = val
  }
  // 查询事件
  window.searchHandle = function () {
    table.reload('table1', {
      url: '/mockData/table.json',
      where: queryParam
    })
  }

  //默认查询参数
  var defaultParamData = [
    {
      key: 'default1',
      title: '流量包',
      list: [
        {
          id: '1',
          title: '夜间流量包'
        },
        {
          id: '2',
          title: '夜间流量包'
        },
        {
          id: '3',
          title: '夜间流量包'
        },
        {
          id: '4',
          title: '夜间流量包'
        },
        {
          id: '5',
          title: '夜间流量包'
        },
        {
          id: '6',
          title: '夜间流量包'
        }
      ]
    },
    {
      key: 'default2',
      title: '套餐',
      list: [
        {
          id: '1',
          title: '套餐1'
        },
        {
          id: '2',
          title: '套餐2'
        },
        {
          id: '3',
          title: '套餐3'
        },
        {
          id: '4',
          title: '套餐4'
        }

      ]
    }
  ]
  var getTpl1 = defaultList.innerHTML, defaultWrap = document.getElementById('default-wrap');
  var getTpl2 = extraList.innerHTML, extraWrap = document.getElementById('extra-wrap');
  laytpl(getTpl1).render(defaultParamData, function (html) {
    defaultWrap.innerHTML = html;
  });
  window.toggleParam = function (obj) {
    $(obj).toggleClass('down')
    if ($(obj).hasClass('down')) {
      renderExtra();
      $(obj).html(' 收起 <span class="layui-icon layui-icon-up"></span>')
    } else {
      extraWrap.innerHTML = '';
      $(obj).html(' 更多 <span class="layui-icon layui-icon-down"></span>')
    }
  }
  function renderExtra () {
    var extraParamData = [
      {
        title: '额外1',
        key: 'extra1',
        list: [
          {
            id: '1',
            title: '夜间流量包'
          },
          {
            id: '2',
            title: '夜间流量包'
          },
          {
            id: '3',
            title: '夜间流量包'
          },
          {
            id: '4',
            title: '夜间流量包'
          }

        ]
      },
      {
        title: '额外2',
        key: 'extra2',
        list: [
          {
            id: '1',
            title: '套餐1'
          },
          {
            id: '2',
            title: '套餐2'
          },
          {
            id: '3',
            title: '套餐3'
          },
          {
            id: '4',
            title: '套餐4'
          }

        ]
      },
      {
        title: '额外3',
        key: 'extra3',
        list: [
          {
            id: '1',
            title: '套餐1'
          },
          {
            id: '2',
            title: '套餐2'
          },
          {
            id: '3',
            title: '套餐3'
          },
          {
            id: '4',
            title: '套餐4'
          }

        ]
      }
    ]
    laytpl(getTpl2).render(extraParamData, function (html) {
      extraWrap.innerHTML = html;
    });
  }



})
