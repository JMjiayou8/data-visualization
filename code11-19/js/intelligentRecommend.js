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
    function f (i) {//顾客群数据
      $.ajax({
        url: '/mockData/custGroup.json',
        data: {
          page: i,
          limit: 10,
          name: $('#searchName').val() || ''
        },
        type: 'GET',
        success: function (data) {
          var custData = {
            list: data.data
          }
          var getTpl = selectHtml.innerHTML, selectWrap = document.getElementById('selectWrap');
          laytpl(getTpl).render(custData, function (html) {
            selectWrap.innerHTML = html;
          });
        }
      })
    }
    f(page)
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
          f(obj.curr)
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
