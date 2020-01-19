var curImg = document.getElementById('img')
var num = 1
var dotsArr = document.getElementById("dotsList")[0].getElementsByTagName("li");

function changeImgs() {
	setInterval(() => {
    moveToRight();
  }, 2000);
}

function moveToRight() {
	num++;
	if(num == 4) {
		num = 1
	}
	curImg.src = `./images/img${num}.jpg`;
}

function moveToLeft() {
	num--;
	if(num == 0) {
		num = 3
	}
	curImg.src = `./images/img${num}.jpg`;
}

function clickDots() {
	for (var i = 0; i < dotsArr.length; i++) {
    dotsArr[i].index = i;
    dotsArr[i].onclick = function() {
      var num = this.index + 1;
      curImg.src = "img/" + num + ".jpg";
    };
  }
}

// changeImgs();