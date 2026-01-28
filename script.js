let currentIndex = 0;

function init() {
 loadGallery()
}


function loadPictures(pictureBook, containerID) {
  let container = document.getElementById(containerID);
  container.innerHTML = "";

  for (let i = 0; i < pictureBook.length; i++) {
    const picture = pictureBook[i];
    container.innerHTML += getPictureTemplate(picture, i);
  }
}

function loadGallery() {  
  loadPictures(pictureBookOne, "picturesOne", "pictureBookOne");
  loadPictures(pictureBookTwo, "picturesTwo", "pictureBookTwo");
  loadPictures(pictureBookThree, "picturesThree", "pictureBookThree");
}