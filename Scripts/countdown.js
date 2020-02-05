$(function () {


$('#clock-c').countdown(new Date(2020, 3, 3,8,5), function(event) {
      var $this = $(this).html(event.strftime(''
        + '<span class="h1 font-weight-bold">%D</span> Days%!d'
        + '<span class="h1 font-weight-bold">%H</span> Hours'
        + '<span class="h1 font-weight-bold">%M</span> Minutes'
        + '<span class="h1 font-weight-bold">%S</span> Seconds'));
    });
    });
