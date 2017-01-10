var filterOn = document.querySelector('.filter button');
var pusher = document.querySelector('.pusher');
var menu = document.querySelector('.mf-container');

var check = document.querySelector('#clickmij');
var item = document.querySelector('.filter-menu li');



function scanning(e) {
  check.checked ^= false; // settingit true = click twice why???
  if (check.checked == true) {
    item.classList.toggle('selected');
  }
  console.log(check.checked);
  console.log(check);

}

function test(e) {
  console.log(1);
  // menu.classList.toggle('st-effect-2');
  menu.classList.toggle('filter-menu-open');
}

function closeFilter(e) {
  if (e.target.classList.contains('pusher')) {
    menu.classList.toggle('filter-menu-open');
    console.log(e.target);
  }
}

item.addEventListener('click', scanning);
filterOn.addEventListener('click', test);
pusher.addEventListener('click', closeFilter);
