layui.use(['form', 'laydate', 'laytpl', 'jquery', 'slider', 'laypage'], function () {
  var form = layui.form,
    layer = layui.layer,
    laydate = layui.laydate,
    laytpl = layui.laytpl,
    slider = layui.slider,
    laypage = layui.laypage,
    $ = layui.jquery;

  var chooseCustID = 24;
  var dateFormat='yyyy/MM/dd'
  var today=formatDate(new Date(),dateFormat)
  //日期
  laydate.render({
    elem: '#date1',
    min: today,
    format:dateFormat
  })
  laydate.render({
    elem: '#date2',
    min: today,
    format:dateFormat
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
    // $('#resetForm').click();
    $('#aaa').hide();
    $('#bbb').show();
    // $(document).scrollTop(0)
 
    $("html", window.parent.document).animate({scrollTop:0},100);
    $("html", window.document).animate({scrollTop:0},100);
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
            list: data.data,
            chooseCustID: chooseCustID
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

  window.chooseCust = function (obj, id) {
    $('.custGroupContent').removeClass('active')
    $(obj).addClass('active')
    chooseCustID = id;
  }

  window.toDetailCust = function (obj, id) {
    event.stopPropagation();
    layer.open({
      title: title + '详情查看',
      content: title + '详情查看',
    });
  }

})
