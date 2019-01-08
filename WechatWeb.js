//jinyou.qqq.ybkc365.com(传影联盟) AD remove
if (window.location.host == 'jinyou.qqq.ybkc365.com') {
    $.map($('body *'), function(e,n) {
          　　if ($(e).css('position') != 'static' && $(e).css('z-index') > 900)
          　　 $(e).remove();
          });
}
