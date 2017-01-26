var filterTile = document.querySelectorAll('section:nth-of-type(2) li');


for (var i = 1; i < filterTile.length; i++) {
  filterTile[i].addEventListener('mouseenter', showInfo);
  filterTile[i].addEventListener('mouseout', showInfo);
}

function showInfo(event) {
  var hoverOn = this.children[1];
  hoverOn.classList.toggle('visibility');
}
