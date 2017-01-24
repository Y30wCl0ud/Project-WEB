
var item = document.querySelector('.filter-menu li');

var state = false;
var articles = document.querySelectorAll('.verhalen article');
var filterItem = document.querySelectorAll('section:nth-of-type(2) li');
var filterInfo = document.querySelectorAll('section:nth-of-type(2) li p')
var windowSize;





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
  // articles[1].scrollIntoView(true);
  var i = 0;

  //set add class//make a loop check all li for class and remove if they have it
  if (state === false) {

    if (e.target.classList.contains('selected')) {
      e.target.classList.remove('selected');
    } else {
      for (var i = 0; i < filterItem.length; i++) {
        filterItem[i].classList.remove('selected');
      }
      e.target.classList.add('selected');
    }



    for (i = 0; i < articles.length; i++) {
      // if (articles[i].classList.contains('selected')) {
      //   console.log("test");
      //   return;
      // }

      if (articles[i].getAttribute('data-color') === chosenColor) {
        articles[i].classList.remove('filtered');
        console.log(articles[i]);

      } else {
        articles[i].classList.add('filtered');
      }
    }

    // state = true;
  }

  else {
    for (i = 0; i < articles.length; i++) {
      articles[i].classList.remove('filtered');
      filterItem[i].classList.remove('selected');
    }
    // state = false;
  }

}

// console.log(attri[2].getAttribute('data-color'));
window.addEventListener('resize', function() {
  // console.log(window.innerWidth);
  windowSize = window.innerWidth;
});

item.addEventListener('click', filterStories);

for (var i = 1; i < filterItem.length; i++) {
  filterItem[i].addEventListener('click', filterStories);
  // filterItem[i].addEventListener('mouseover', showInfo);

}





function showInfo(e) {
  // var target = document.querySelector(e);
  var target = e.target.childnodes;
  console.log(target);
  // articles[1].scrollIntoView(true);
}




// card swipe prototype
var swipeElements = document.querySelectorAll('.verhalen article section');

for (var i = 0; i < swipeElements.length; i++) {
  var hammerCard = new Hammer (swipeElements[i]);
  hammerCard.on('panend', resetElement);
  i % 2 ? hammerCard.on('panright', swiping) : hammerCard.on('panleft', swiping);
}



function swiping(event) {
  var elToSwipe = event.target;
  // elToSwipe.style.left =  event.deltaX + 'px';
  elToSwipe.style.transform = 'translateX(' + event.deltaX + 'px)';
}


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
  else {
    return;
  }
}
