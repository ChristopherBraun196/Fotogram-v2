function getPictureTemplate(i) {
  let pic = pictureBookOne[i];
  return `  
    <div class="mb-4 break-inside-avoid" onclick="loadGallery(${i})">
        <img class="w-full aspect-square object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform" 
             src="${pic.image}" 
             alt="${pic.name}">
    </div>
  `;
}