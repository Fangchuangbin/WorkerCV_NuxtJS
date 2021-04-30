$(document).ready(() => {

  //跳转注册
  $('#showUserRegisterModal').click(() => {
    $('#userLoginModal').modal('hide');
    $('#userRegisterModal').modal('show');
  })

  //跳转登录
  $('#openUserLoginModal').click(() => {
    $('#userRegisterModal').modal('hide');
    $('#userLoginModal').modal('show');
  })

  function success() {
    $(document).append('<div class="alert alert-success" role="alert">A simple success alert—check it out!</div>');
  }
})