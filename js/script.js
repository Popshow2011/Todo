$(".todo-btn").on('click', (function (e) {
  e.preventDefault();
  var head = $("#name-todo").val();
  var body = $("#todo-description").val();

  if (head.length > 0 && body.length > 0) {
    $('.empty-item').hide();
    $('.todo-item-wrap').append('<div class="todo-item"><div class="todo-item-headline"><h3>' + head + '</h3><div class="remove-todo"></div>' + '<div class="todo-slide-down"></div>' + '</div><div class="todo-item-description">' + body + '</div>');
    $("#name-todo").css('border', '1px solid #ebebeb');
    $("#todo-description").css('border', '1px solid #ebebeb');
    $('.todo-form').trigger('reset');
  } else if (head.length == 0) {
    $("#name-todo").css('border', '1px solid red');
  } else if (body.length == 0) {
    $("#todo-description").css('border', '1px solid red');
  } else if (head.length == 0 && body.length == 0) {
    $("#name-todo").css('border', '1px solid red');
    $("#todo-description").css('border', '1px solid red');
  };

}));


$('.todo-item-wrap').on('click', '.remove-todo', function () {
  $(this).parents('.todo-item').animate({
    width: 0,
    height: 0
  }, 500, function () {
    $(this).remove();
    if ($('.todo-item').length == 0) {
      $('.empty-item').show();
    };
  });
});





$('.todo-item-wrap').on('click', '.todo-slide-down', function () {
  var decription = $(this).parents('.todo-item').find('.todo-item-description');

  if (decription.css('display') == 'block') {
    decription.slideUp('fast');
    $(this).parents('.todo-item').find('.todo-slide-down').css({
      'transform': 'rotate(90deg)',
      'transition': '.4s'
    });
  } else {
    decription.slideDown('fast');
    $(this).parents('.todo-item').find('.todo-slide-down').css({
      'transform': 'rotate(0deg)',
      'transition': '.4s'
    });
  };
});
