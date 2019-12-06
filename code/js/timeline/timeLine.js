var showMonthList = [];
var wholeMonthList;
var curMonth=new Date();
var activeMonth =formatterDate(curMonth) ;
// 获取全部月份数据
var getWholeMonth = function(start) {
  var year = new Date(start).getFullYear();
  var month = new Date(start).getMonth()+1;

  var jump = (curMonth.getFullYear() - year) * 12 + curMonth.getMonth() - month + 1
  var re = []
  for (var i = 0; i < (jump > 12 ? jump + 1 : 12); i++) {
    t = i + month - 1;
    re.push((year + parseInt(t / 12)) + '-' + addZero(t % 12 + 1))
  }
  return re
}
//渲染时间轴
function rendList (month , offset ) {
  activeMonth = month||formatterDate(curMonth);
  offset=offset||0
  showMonthList = wholeMonthList.slice(wholeMonthList.length - 12 - offset, wholeMonthList.length - offset)

  var validArr=[],listArr=[];
  for(var i=0;i<wholeMonthList.length;i++){
    if(new Date(wholeMonthList[i])<curMonth){
      validArr.push(wholeMonthList[i])
    }
  }
  for(var i=0;i<showMonthList.length;i++){
    var item=showMonthList[i];
    listArr.push('<li class="timeLine-item '+(item == activeMonth ? 'active' : '')+' '+((new Date(item) > curMonth) ? 'disabled' : '')+' " onclick="clickMonth(\''+item+'\');"><p>'+item+'</p><i></i></li>')
  }
  var prevFlag=activeMonth == validArr[0],nextFlag=activeMonth == validArr[validArr.length - 1] ;
  var prevHtml = '<div class="fl timeLine-prev '+(prevFlag?'disabled':'')+'" ' + (prevFlag ? '' : 'onclick="change(\'prev\')"') + '></div>'
  var nextHtml = '<div class="fl timeLine-next '+(nextFlag?'disabled':'')+'" ' + (nextFlag ? '' : 'onclick="change(\'next\')"') +
    '></div>'
  $('#timeLine').html([prevHtml, '<div class="timeLine-body "><ul class="timeLine-slide" >' + listArr.join('') + '</ul></div>', nextHtml].join(''))
  renderPage({month:activeMonth})
}
// 月份点击事件
function clickMonth (month) {
  rendList(month)
}
// 前进后退点击事件
function change (dir) {
  var inde = wholeMonthList.indexOf(activeMonth)
  var inde2 = showMonthList.indexOf(activeMonth)
  var offset = wholeMonthList.length - inde;
  if (dir == 'prev') {
    if (offset >= 12) {
      rendList(wholeMonthList[inde - 1], offset - 11)
    } else {
      rendList(showMonthList[inde2 - 1], 0)
    }
  } else {
    if (offset >= 13) {
      rendList(wholeMonthList[inde + 1], offset - 13)
    } else {
      rendList(showMonthList[inde2 + 1], 0)
    }
  }
}

function formatterDate(date){
  var dateVal=new Date(date);
  return dateVal.getFullYear()+'-'+addZero(date.getMonth()+1)
}
function addZero(num){
  return num<10?'0'+num:num
}

$('.timeLine-wrapper').onselectstart = function(){return false;};
