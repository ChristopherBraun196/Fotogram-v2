
function getPictureTemplate(pic, i, bookName) {
  return `   
    <button class="picture-button" onclick="openImage('${bookName}', ${i})">
        <img class="pictureGallery" 
             src="${pic.image}" 
             alt="${pic.name}">
    </button>
  `;
}