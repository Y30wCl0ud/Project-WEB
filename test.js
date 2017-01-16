var filterOn = document.querySelector('.filter button');
var pusher = document.querySelector('.pusher');
var menu = document.querySelector('body');

var check = document.querySelector('#clickmij');
var item = document.querySelector('.filter-menu li');



function scanning(e) {
  check.checked ^= false;
  if (check.checked == true) {
    item.classList.toggle('selected');
  }
  console.log(check.checked);
  console.log(check);

}

function mobileFilterToggle(e) {
  console.log(1);
  menu.classList.toggle('filter-menu-open');
}

function closeFilter(e) {
  if (e.target.classList.contains('pusher')) {
    menu.classList.toggle('filter-menu-open');
    console.log(e.target);
  }
}

item.addEventListener('click', scanning);
filterOn.addEventListener('click', mobileFilterToggle);
pusher.addEventListener('click', closeFilter);
