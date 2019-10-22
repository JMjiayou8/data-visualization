$(function () {
  rendCardWrap()
})
// 模拟数据
var cardData = [
  {
    title: '单产品转融合',
    status: 'success',
    statusText: '已生效',
    ratio: 4,
    ratioTrend: 'up',
    pushNum: 14899,
    orderNum: 899,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 50
  },
  {
    title: '单产品转融合',
    status: 'error',
    statusText: '已失效',
    ratio: 4,
    ratioTrend: 'up',
    pushNum: 14899,
    orderNum: 899,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 50
  },
  {
    title: '单产品转融合',
    status: 'success',
    statusText: '已生效',
    ratio: 0,
    ratioTrend: 'none',
    pushNum: 899,
    orderNum: 199,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 10
  },
  {
    title: '单产品转融合',
    status: 'error',
    statusText: '已失效',
    ratio: 1,
    ratioTrend: 'down',
    pushNum: 899,
    orderNum: 199,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 10
  },
  {
    title: '单产品转融合',
    status: 'error',
    statusText: '已失效',
    ratio: 1,
    ratioTrend: 'down',
    pushNum: 899,
    orderNum: 199,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 10
  },
  {
    title: '单产品转融合',
    status: 'error',
    statusText: '已失效',
    ratio: 1,
    ratioTrend: 'down',
    pushNum: 899,
    orderNum: 199,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 10
  },
  {
    title: '单产品转融合',
    status: 'error',
    statusText: '已失效',
    ratio: 1,
    ratioTrend: 'down',
    pushNum: 899,
    orderNum: 199,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 10
  },
  {
    title: '单产品转融合',
    status: 'error',
    statusText: '已失效',
    ratio: 1,
    ratioTrend: 'down',
    pushNum: 899,
    orderNum: 199,
    lastPushNum: 0,
    lastPushTime: '2019-10-08 09:05',
    lastPushRate: 10
  }
]
function rendCardWrap () {
  var cardTemplate =
    ' <div class="normal-part per3">' +
    '<div class="part-title-wrap"><p class="part-title">{title}</p></div>' +
    '<div class="normal-body"><div class="clearfix"><div class="normal-btn small fl {status}">{statusText}</div>' +
    '<div class="fr rate"><span>环比</span><span class="{ratioTrend}">{ratioText}</span></div></div>' +
    '<ul class="part-card-list sum clearfix">' +
    '<li class="part-card-item  fl"><span class="part-card-title">累计推送</span><p class="part-card-num">{pushNum}<i class="unit">人</i></p></li>' +
    '<li class="part-card-item fl"><span class="part-card-title">累计订购</span><p class="part-card-num">{orderNum}<i class="unit">人</i></p></li>' +
    '</ul>' +
    '<ul class="part-card-list time clearfix">' +
    '<li class="part-card-item fl"><span class="part-card-title">最近一次推送</span><p class="part-card-num">{lastPushNum}<i class="unit">人</i></p></li>' +
    '<li class="part-card-item progress fl"><span class="part-card-title">{lastPushTime}</span><div class="part-card-progress"><p class="progress-bg"><span class="bar" style="width:{lastPushRate}%"></span></p><span class="progress-num" >{lastPushRate}%</span></div></li>' +
    '</ul>' +
    '</div></div>'
  var arr = []
  for (var i = 0; i < cardData.length; i++) {
    var item = cardData[i]
    var ratioText = item.ratio == 0 ? '持平' : item.ratio + '%'
    arr.push(
      cardTemplate
        .replace(/{title}/g, item.title)
        .replace(/{status}/g, item.status)
        .replace(/{statusText}/g, item.statusText)
        .replace(/{ratioText}/g, ratioText)
        .replace(/{ratioTrend}/g, item.ratioTrend)
        .replace(/{pushNum}/g, item.pushNum)
        .replace(/{orderNum}/g, item.orderNum)
        .replace(/{lastPushNum}/g, item.lastPushNum)
        .replace(/{lastPushTime}/g, item.lastPushTime)
        .replace(/{lastPushRate}/g, item.lastPushRate)
    )
  }
  $('.page-body').html(arr.join(''))
}
