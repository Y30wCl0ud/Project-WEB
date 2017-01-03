var account = document.getElementById('account_btn');

account.addEventListener('click', toggleLogin, false);

function toggleLogin() {
  var loginForm = document.getElementById('login_form');
  loginForm.classList.toggle('visibility');
}
