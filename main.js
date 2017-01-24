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


/*=============================================>>>>>
= like and bookmark events =
===============================================>>>>>*/


var articleLike = document.getElementById('like');
var articleBookmark = document.getElementById('bookmark');
console.log(articleLike, articleBookmark);


function aniArtiSelection(e) {
  console.log(e.target);
  e.target.classList.toggle('animated');
  e.target.classList.toggle('inactiveArtiItem');
}

articleLike.addEventListener('click', aniArtiSelection);
articleBookmark.addEventListener('click', aniArtiSelection);




/*=============================================>>>>>
= swipe prototype =
===============================================>>>>>*/

var swipeElements = document.querySelectorAll('.verhalen article section');

// initializing swipe elements to be swiped
for (var i = 0; i < swipeElements.length; i++) {
  var hammerCard = new Hammer (swipeElements[i]);
  hammerCard.on('panend', resetElement);
  i % 2 ? hammerCard.on('panright', swiping) : hammerCard.on('panleft', swiping);
}

// allows the element to be swiped
function swiping(event) {
  var elToSwipe = event.target;
  // elToSwipe.style.left =  event.deltaX + 'px';
  elToSwipe.style.transform = 'translateX(' + event.deltaX + 'px)';
}

// toggling between the two faces
// this is a starting setup to add the function to all the cards (alas)
function resetElement(event) {
  var toReset = event.target;

  if (event.target === swipeElements[0] || event.target === swipeElements[1]) {
    for (var i = 0; i < swipeElements.length; i++) {
      if (i % 2 == 0 && event.deltaX < -30) {
        swipeElements[i + 1].style.transform = 'translateX(0px)';
        swipeElements[i + 1].classList.toggle('trans');
        swipeElements[i].classList.toggle('trans');
      } else if (i % 2 == 1 && event.deltaX > 30) {
        swipeElements[i - 1].style.transform = 'translateX(0px)';
        swipeElements[i - 1].classList.toggle('trans');
        swipeElements[i].classList.toggle('trans');
      }
    }
  }
}
