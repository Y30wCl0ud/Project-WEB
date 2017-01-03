var filterOn = document.querySelector('.filter button');
var pusher = document.querySelector('.pusher');
var menu = document.querySelector('.mf-container');

var check = document.querySelector('#clickmij');
check.addEventListener('click', scanning);
function scanning() {
//   if (check.checked) {
//     check.checked = false;
//   } else {
//     check.checked = true;
//   }
//   // check.checked ^= true;
//
  console.log(check.checked);
}


filterOn.addEventListener('click', test);
pusher.addEventListener('click', closeFilter);

function test(e) {
  // menu.classList.toggle('st-effect-2');
  menu.classList.toggle('filter-menu-open');
}

function closeFilter(e) {
  if (e.target.classList.contains('pusher')) {
    menu.classList.toggle('filter-menu-open');
    console.log(e.target);
  }
}
