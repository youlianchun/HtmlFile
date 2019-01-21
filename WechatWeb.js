//jinyou.qqq.ybkc365.com(传影联盟) AD remove
if (window.location.host.match(new RegExp("^jinyou.qqq.*$"))) {
    $.map($('body *'), function(e,n) {
          　　if ($(e).css('position') != 'static' && $(e).css('z-index') > 900)
          　　 $(e).remove();
          });
}
