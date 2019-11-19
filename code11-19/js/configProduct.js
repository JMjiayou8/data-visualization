layui.use(['form', 'layedit', 'laydate', 'laytpl', 'jquery'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate,
    laytpl = layui.laytpl,
    $ = layui.jquery;


  //日期
  laydate.render({
    elem: '#date1'
  })
  laydate.render({
    elem: '#date2'
  })

  //渲染触点选择区域
  var data = { //触点数据
    'optionList': [
      { text: '短信', value: '1' },
      { text: '微信', value: '2' },
      { text: '手厅', value: '3' },
      { text: '营业厅', value: '4' },
    ],
    "list": ['']
  }
  var getTpl = selectHtml.innerHTML, selectWrap = document.getElementById('selectWrap');
  laytpl(getTpl).render(data, function (html) {
    selectWrap.innerHTML = html;
    form.render('select');
  });
  form.on('submit(submitForm1)', function (data) {
    var data = form.val('form1');
    alert(JSON.stringify(data, null, 4));
    return false;
  });
  // 添加一行触点选择
  $(document).on('click', '.layui-btn-add', function () {
    data.list.push('')
    laytpl(getTpl).render(data, function (html) {
      selectWrap.innerHTML = html;
      form.render('select');
    });
  })
  // 删除一行触点选择
  $(document).on('click', '.layui-btn-del', function (evt) {
    var index = $(evt.target).data['index']
    if (data.list.length > 1) {
      data.list.splice(index, 1)
      laytpl(getTpl).render(data, function (html) {
        selectWrap.innerHTML = html;
        form.render('select');
      });
    } else {
      layer.msg('至少有一条');
    }

  })
})
