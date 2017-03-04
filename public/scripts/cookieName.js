  console.log($.cookie('petname'))
  var userImg = $.cookie('petname');
  // nameUser
  // imgUser
  $('.nameUser').text($.cookie('petname'));
  $('.imgUser').attr(
  {
  	src:'/uploads/' +userImg + '.jpg'
  });
  $('.imgUser').error(function() {
  	this.src = '/uploads/3.jpg'
  });
  $('.siderSelect>li').click(function() 
  {
    $(this).addClass('active')
  });
  $('.signout').click(function() {
    location.href = '/'
  });