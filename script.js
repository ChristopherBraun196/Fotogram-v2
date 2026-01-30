const allBooks = {
  pictureBookOne: pictureBookOne,
  pictureBookTwo: pictureBookTwo,
  pictureBookThree: pictureBookThree,
};

let currentIndex = 0;
let currentBook = [];

function init() {
  loadGallery();
  eventListener();
}

function eventListener() {
  const dialog = document.getElementById("picturesDialogOne");

  document.addEventListener("keydown", switchKey);

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });
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
  currentBook = allBooks[bookName]; 
  currentIndex = index;

  renderImage();
  dialog.showModal();
}

function loadGallery() {
  loadPictures(pictureBookOne, "picturesOne", "pictureBookOne");
  loadPictures(pictureBookTwo, "picturesTwo", "pictureBookTwo");
  loadPictures(pictureBookThree, "picturesThree", "pictureBookThree");
}

function closeBtn() {
  document.getElementById("picturesDialogOne").close();
}

function switchKey(event) {
  const dialog = document.getElementById("picturesDialogOne");
  if (!dialog.open) return;

  if (event.key === "Escape") {
    closeBtn();
  }
  if (event.key === "ArrowLeft") {
    prevBtn();
  }
  if (event.key === "ArrowRight") {
    nextBtn();
  }
}

function closeImg(event) {
  const dialog = document.getElementById("picturesDialogOne");
  if (event.target === dialog) {
    closeBtn();
  }
}

function nextBtn() {
  if (!currentBook || currentBook.length === 0) return;
  currentIndex++;
  if (currentIndex >= currentBook.length) {
    currentIndex = 0;
  }
  renderImage();

}
function prevBtn() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = currentBook.length - 1;
  }
  renderImage();
}

function renderImage() {
  const dialog = document.getElementById("picturesDialogOne");
  const pic = currentBook[currentIndex];
  dialog.innerHTML = openThisPicture(pic);
}

function closeBtn() {
  document.getElementById("picturesDialogOne").close();
}

function logIn() {
    let log = document.getElementById('login');
    
    // Falls noch kein Inhalt drin ist (vom Template)
    if (log.innerHTML.trim() === "") {
        log.innerHTML = loginTemplate();
    }

    // Umschalten zwischen Anzeigen und Verstecken
    log.classList.toggle('d-none');
}
