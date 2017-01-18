// login form
var account = document.getElementById('account_btn');

function toggleLogin() {
  var loginForm = document.getElementById('login_form');
  loginForm.classList.toggle('visibility');
}

account.addEventListener('click', toggleLogin);

// mobile filter
// var filterOn = document.querySelector('.filter button');
// var pusher = document.querySelector('.pusher');
// var menu = document.querySelector('body');
//
//
// function mobileFilterToggle(e) {
//   console.log(1);
//   menu.classList.toggle('filter-menu-open');
// }
//
// function closeFilter(e) {
//   if (e.target.classList.contains('pusher')) {
//     menu.classList.toggle('filter-menu-open');
//     console.log(e.target);
//   }
// }
//
// filterOn.addEventListener('click', mobileFilterToggle);
// pusher.addEventListener('click', closeFilter);
