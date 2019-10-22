// tab切换
$('.tab-head-item').click(function () {
  var parent = $(this).parents('.normal-part')
  parent.find('.tab-head-item').removeClass('active')
  $(this).addClass('active')
  parent.find('.tab-pane').hide()
  let paneBody = $(this).attr('role')
  $('#tab-' + paneBody).show()
})