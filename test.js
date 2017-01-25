
var mFilterItem = document.querySelectorAll('.filter-menu li');

var articles = document.querySelectorAll('.verhalen article');
var filterItem = document.querySelectorAll('section:nth-of-type(2) li');
var filterInfo = document.querySelectorAll('section:nth-of-type(2) li p')
var windowSize;

var stories = document.querySelector('section:nth-of-type(3)');


var pusher = document.querySelector('main');
var pageBody = document.querySelector('body');


function mobileFilterToggle(e) {
  if (window.innerWidth < 480) {
    pageBody.classList.toggle('filter-menu-open');
  }
}

function closeFilter(e) {
  if (e.target.getAttribute('data-effect') === 'pusher') {
    pageBody.classList.toggle('filter-menu-open');
    console.log(e.target);
  }
}

pusher.addEventListener('click', closeFilter);



var storiesOffset;
var pageOffset;

function filterStories(e) {
  storiesOffset = stories.offsetTop;
  pageOffset = window.pageYOffset;
  // var foo = true;




  var chosenColor = e.target.getAttribute('data-color');

// filtering the articles
  for (var i = 0; i < articles.length; i++) {
    articles[i].classList.add('filtered');

    if (articles[i].getAttribute('data-color') === chosenColor) {
      articles[i].classList.remove('filtered');
    } else {
    }
  }

  // check whether the filter is selected or not
    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    // to deactivate a already active filter
      for (var i = 0; i < articles.length; i++) {
        articles[i].classList.remove('filtered');
      }
    } else {
      for (var i = 0; i < mFilterItem.length; i++) {
        filterItem[i].classList.remove('selected');
        mFilterItem[i].classList.remove('selected');
      }
      pageBody.classList.add('transition');
      if (storiesOffset != pageOffset) {
        pageBody.style.transform = "translate(0, -" + (storiesOffset - pageOffset) + "px)";
      }

      window.setTimeout(function(){
        pageBody.classList.remove('transition');
        pageBody.style.cssText = "";
          window.scrollTo(0, storiesOffset);
      }, 900)

      e.target.classList.add('selected');
    }


}

// console.log(attri[2].getAttribute('data-color'));
window.addEventListener('resize', function() {
  // console.log(window.innerWidth);
  windowSize = window.innerWidth;
});


for (var i = 1; i < filterItem.length; i++) {
  filterItem[i].addEventListener('click', filterStories);
  // filterItem[i].addEventListener('mouseover', showInfo);

}

for (var i = 0; i < mFilterItem.length; i++) {
  mFilterItem[i].addEventListener('click', filterStories);
}





function showInfo(e) {
  // var target = document.querySelector(e);
  var target = e.target.childnodes;
  console.log(target);
  // articles[1].scrollIntoView(true);
}



var mobiletrigger = document.querySelector('section:nth-of-type(2) ul');

mobiletrigger.addEventListener('click', mobileFilterToggle);
