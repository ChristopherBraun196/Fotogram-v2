const allBooks = {
  pictureBookOne: pictureBookOne,
  pictureBookTwo: pictureBookTwo,
  pictureBookThree: pictureBookThree,
};

let currentIndex = 0;

function init() {
  loadGallery();
}

function loadPictures(pictureBook, containerID, bookName) {
  let container = document.getElementById(containerID);
  container.innerHTML = "";

  for (let i = 0; i < pictureBook.length; i++) {
    const picture = pictureBook[i];
    container.innerHTML += getPictureTemplate(picture, i, bookName);
  }
}

function openImage(bookName, index) {
  const dialog = document.getElementById("picturesDialogOne");

  const pic = allBooks[bookName][index];
  dialog.innerHTML = openThisPicture(pic);

  dialog.showModal();
}

function loadGallery() {
  loadPictures(pictureBookOne, "picturesOne", "pictureBookOne");
  loadPictures(pictureBookTwo, "picturesTwo", "pictureBookTwo");
  loadPictures(pictureBookThree, "picturesThree", "pictureBookThree");
}
