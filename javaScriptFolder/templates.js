function getPictureTemplate(pic, i, bookName) {
  return `   
    <button class="picture-button" onclick="openImage('${bookName}', ${i})">
        <img class="pictureGallery" 
             src="${pic.image}" 
             alt="${pic.name}">
    </button>
  `;
}

function openThisPicture(pic) {
  return `
    <div class="dialog-content">
      <img src="${pic.image}" alt="${pic.name}" style="max-width: 100%;">
      <p>${pic.name}</p>
      <button onclick="document.getElementById('picturesDialogOne').close()">Schließen</button>
    </div>
  `; 
}
