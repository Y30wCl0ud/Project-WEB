/*=============================================>>>>>
= loginform =
===============================================>>>>>*/
var account = document.getElementById('account_btn');

function toggleLogin() {
  var loginForm = document.getElementById('login_form');
  loginForm.classList.toggle('visibility');
}

account.addEventListener('click', toggleLogin);

/*=============================================>>>>>
= like and bookmark events =
===============================================>>>>>*/

var articleLike = document.getElementById('like');
var articleBookmark = document.getElementById('bookmark');

function aniArtiSelection(event) {
  event.target.classList.toggle('animated');
  event.target.classList.toggle('inactiveArtiItem');
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

/*=============================================>>>>>
= filtersystem =
===============================================>>>>>*/
var mFilterTile = document.querySelectorAll('.filter-menu li'),
    filterTile = document.querySelectorAll('section:nth-of-type(2) li');

var mFilterTrigger = document.querySelector('section:nth-of-type(2) ul'),
    pusher = document.querySelector('main'),
    pageBody = document.querySelector('body');

var articles = document.querySelectorAll('.verhalen article'),
    stories = document.querySelector('section:nth-of-type(3)'),
    chosenColor,
    storiesOffset,
    pageOffset;




// two functions to toggle the mobile color filter
function mobileFilterToggle() {
  if (window.innerWidth < 480) {
    pageBody.classList.toggle('filter-menu-open');
  }
}

function closeFilter(event) {
  if (event.target.getAttribute('data-effect') === 'pusher') {
    pageBody.classList.toggle('filter-menu-open');
  }
}

// function to select the correct filter tile, filter the stories & scroll to results
function filterStories(event) {
  storiesOffset = stories.offsetTop;
  pageOffset = window.pageYOffset;

  chosenColor = event.target.getAttribute('data-color');

  // filtering the articles
  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.add('filtered');
    if (articles[i].getAttribute('data-color') === chosenColor) {
      articles[i].classList.remove('filtered');
    }
  }

  // check whether the filter (tile) is selected or not
  if (event.target.classList.contains('selected')) {
    event.target.classList.remove('selected');
  // to show all the artivles again
    for (var i = 0; i < articles.length; i++) {
      articles[i].classList.remove('filtered');
    }
  } else {
    for (var i = 0; i < mFilterTile.length; i++) {
      filterTile[i+1].classList.remove('selected');
      mFilterTile[i].classList.remove('selected');
    }
    event.target.classList.add('selected');

    // the scroll transition to the stories/articles
    pageBody.classList.add('transition');
    if (storiesOffset != pageOffset) {
      pageBody.style.transform = "translate(0, -" + (storiesOffset - pageOffset) + "px)";
    }

    window.setTimeout(function() {
      pageBody.classList.remove('transition');
      pageBody.style.cssText = "";
        window.scrollTo(0, storiesOffset);
    }, 900)
  }
}


mFilterTrigger.addEventListener('click', mobileFilterToggle);
pusher.addEventListener('click', closeFilter);

for (var i = 1; i < filterTile.length; i++) {
  filterTile[i].addEventListener('click', filterStories);
}

for (var i = 0; i < mFilterTile.length; i++) {
  mFilterTile[i].addEventListener('click', filterStories);
}
