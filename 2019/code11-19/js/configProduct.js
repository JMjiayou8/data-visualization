var a = 111;
layui.use(['form', 'layedit', 'laydate', 'laytpl', 'jquery'], function () {
  var form = layui.form,
    layer = layui.layer,
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
  var contactData = { //触点数据
    'optionList': [
      { text: '短信', value: '1' },
      { text: '微信', value: '2' },
      { text: '手厅', value: '3' },
      { text: '营业厅', value: '4' },
    ],
    "list": ['']//默认选择值
  }
  function renderSelectWrap () {
    var getTpl = selectHtml.innerHTML, selectWrap = document.getElementById('selectWrap');
    laytpl(getTpl).render(contactData, function (html) {
      selectWrap.innerHTML = html;
      form.render('select');
    });
  }
  renderSelectWrap()

  form.on('select(selectItem)', function (data) {
    var index = $(data.elem).data('index');
    contactData.list[index] = data.value
    renderSelectWrap()
  })
  // 配置触点
  $(document).on('click', '.config-btn', function (evt) {
    var id = contactData.list[$(evt.target).attr('bindIndex')];
    var name;
    for (var i = 0; i < contactData.optionList.length; i++) {
      if (contactData.optionList[i].value == id) {
        name = contactData.optionList[i].text || '';
      }
    }
    layer.open({
      title: name + '配置',
      type: 2,
      area: ['700px', '400px'],
      content: '/formDialog.html'
    });

  })
  // 添加一行触点选择
  $(document).on('click', '.layui-btn-add', function () {
    contactData.list.push('')
    renderSelectWrap()
  })
  // 删除一行触点选择
  $(document).on('click', '.layui-btn-del', function (evt) {
    var index = $(evt.target).data('index')
    if (contactData.list.length > 1) {
      contactData.list.splice(index, 1)
      renderSelectWrap()
    } else {
      layer.msg('至少保留一条触点配置');
    }
  })

  // 推荐产品
  $(document).on('click', '.recommend-product', function (evt) {
    layer.open({
      title: '推荐产品',
      content: '推荐产品页面'
    });
  })
  // 提交
  form.on('submit(submitForm1)', function (data) {
    var data = form.val('form1');
    alert(JSON.stringify(data, null, 4));
    return false;
  });

  $(function () {
    var pageType = getUrlParam().type || 'add';
    if (pageType == 'add') {

    } else {

    }

  })
})
