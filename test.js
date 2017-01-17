
var check = document.querySelector('#clickmij');
var item = document.querySelector('.filter-menu li');

var state = false;
var articles = document.querySelectorAll('.verhalen article');
var filterItem = document.querySelectorAll('section:nth-of-type(2) li');


function scanning(e) {
  check.checked ^= false;
  if (check.checked == true) {
    item.classList.toggle('selected');
  }
  console.log(check.checked);
}
item.addEventListener('click', filterStories);

for (var i = 0; i < filterItem.length; i++) {
  filterItem[i].addEventListener('click', filterStories);
}

function filterStories(e) {
  var chosenColor = e.target.getAttribute('data-color');
  console.log(chosenColor);
  var i = 0;
  console.log(e.target);
  //e.target.classList.toggle('selected');
  //set add class
  //make a loop check all li for class and remove if they have it
  if (state === false) {

    for (i = 0; i < articles.length; i++) {
      if (articles[i].getAttribute('data-color') === chosenColor) {
        articles[i].classList.remove('filter-order');
      } else {
        articles[i].classList.add('filter-order');
      }
    }
    state = true;

  } else {
    for (i = 0; i < articles.length; i++) {
      articles[i].classList.remove('filter-order');
      articles[i].classList.remove('selected');
    }
    state = false;
  }

}

// console.log(attri[2].getAttribute('data-color'));




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

  for (var i = 0; i < swipeElements.length; i++) {
    if (i % 2 == 0 && event.deltaX < -100) {
      swipeElements[i + 1].style.transform = 'translateX(0px)';
      swipeElements[i + 1].classList.toggle('trans');
      swipeElements[i].classList.toggle('trans');
    } else if (i % 2 == 1 && event.deltaX > 100) {
      swipeElements[i - 1].style.transform = 'translateX(0px)';
      swipeElements[i - 1].classList.toggle('trans');
      swipeElements[i].classList.toggle('trans');
    }
  }
}
