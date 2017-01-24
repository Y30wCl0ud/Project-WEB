
var mFilterItem = document.querySelectorAll('.filter-menu li');

var articles = document.querySelectorAll('.verhalen article');
var filterItem = document.querySelectorAll('section:nth-of-type(2) li');
var filterInfo = document.querySelectorAll('section:nth-of-type(2) li p')
var windowSize;

var stories = document.querySelector('section:nth-of-type(3)');



// var filterOn = document.querySelector('.filter button');
var filterOn = document.querySelector('section:nth-of-type(2) li');

var pusher = document.querySelector('.pusher');
var menu = document.querySelector('body');


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

filterOn.addEventListener('click', mobileFilterToggle);
pusher.addEventListener('click', closeFilter);




function filterStories(e) {
  // var foo = true;
  if (window.innerWidth < 480) {
    // mobileFilterToggle();
    // foo = false;
    // return;
  }



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
      e.target.classList.add('selected');
    }


  stories.scrollIntoView(true);


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
