layui.use(['form', 'layedit', 'laydate', 'laytpl', 'jquery', 'slider', 'laypage'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate,
    laytpl = layui.laytpl,
    slider = layui.slider,
    laypage = layui.laypage,
    $ = layui.jquery;


  //日期
  laydate.render({
    elem: '#date1'
  })
  laydate.render({
    elem: '#date2'
  })
  //滑块
  var initSlideText = 36;
  $('#slideText').html(initSlideText + '%');
  slider.render({
    elem: '#slideWrap',
    value: initSlideText,
    theme: '#f0912d',
    change: function (vals) {
      initSlideText = vals
      $('#slideText').html(vals + '%');
      form.render()
    }
  });

  // 提交
  form.on('submit(submitForm1)', function (data) {
    var data = form.val('form1');
    data.sliderText = initSlideText;
    alert(JSON.stringify(data, null, 4));
    return false;
  });
  window.rendCustWrap = function (page) {
    page = page || 1;
    //顾客群数据
    var custData = {
      list: [
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        },
        {
          title: '大众高危BSS用户-1702',
          num: 2890934,
          user: '超级管理员'
        }
      ]
    }
    var getTpl = selectHtml.innerHTML, selectWrap = document.getElementById('selectWrap');
    laytpl(getTpl).render(custData, function (html) {
      selectWrap.innerHTML = html;
    });
    laypage.render({
      elem: 'cust-laypage',
      limit: 12,
      cur: page,
      count: 50,
      theme: '#f0912d',
      prev: '<em class="layui-icon layui-icon-left"></em>',
      next: '<em class="layui-icon layui-icon-right"></em>',
      jump: function (obj, first) {
        if (!first) {
          console.log('当前点击==', obj.curr)
          rendCustWrap(obj.curr)
        }
      }
    });
  }
  rendCustWrap();

  window.chooseCust = function (obj, title) {
    $('.custGroupContent').removeClass('active')
    $(obj).addClass('active')
  }

  window.toDetailCust = function (obj, title) {
    event.stopPropagation();
    layer.open({
      title: title + '详情查看',
      content: title + '详情查看',
    });
  }
})
