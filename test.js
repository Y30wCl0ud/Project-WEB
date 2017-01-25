
var mFilterTile = document.querySelectorAll('.filter-menu li'),
    filterTile = document.querySelectorAll('section:nth-of-type(2) li'),
    filterInfo = document.querySelectorAll('section:nth-of-type(2) li p')

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
