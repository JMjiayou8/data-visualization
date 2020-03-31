layui.use(['form', 'layedit', 'laydate', 'laytpl', 'jquery','element'], function () {
  var form = layui.form,
  layer = layui.layer,
  laydate = layui.laydate,
  laytpl = layui.laytpl,
  element=layui.element,
  $=layui.juqery;
  function renderActiveWrap(){
    var activeData={
      configMap:[
        {
          key:'prop1',
          text:'覆盖活动',
          span:12,
          color:'#f6f4df',
          type:'num'
        },
        {
          key:'prop2',
          text:'日均任务',
          span:6,
          color:'#e7f3f0',
          type:'num'
        },
        {
          key:'prop3',
          text:'月均任务',
          span:6,
          color:'#e7f3f0',
          type:'num'
        },
        {
          key:'prop4',
          text:'当日触达',
          span:6,
          color:'#e5e7f8',
          type:'num'
        },
        {
          key:'prop5',
          text:'当月触达',
          span:6,
          color:'#e5e7f8',
          type:'num'
        },
        {
          key:'prop6',
          text:'触达率',
          span:12,
          color:'#f8efe5',
          type:'per'
        }
      ],
      data:{
        prop1:500,
        prop2:800,
        prop3:900,
        prop4:1000,
        prop5:600,
        prop6:16
      }
    }
    var getTpl = activeHtml.innerHTML, wrap = document.getElementById('activeWrap');
    laytpl(getTpl).render(activeData, function (html) {
      wrap.innerHTML = html;
      element.render()
    });
  }
  renderActiveWrap()

})