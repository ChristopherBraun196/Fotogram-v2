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
      <div class="dialog-header">
        <h3>${pic.name}</h3>
        <button class="close-x" onclick="closeBtn()">&#10761;</button>
      </div>

      <div class="image-wrapper">
        <button class="nav-arrow left-arrow" onclick="prevBtn()">&#10094;</button>
        
        <img src="${pic.image}" alt="${pic.name}" class="imgBig">
        
        <button class="nav-arrow right-arrow" onclick="nextBtn()">&#10095;</button>
      </div>

      <div class="dialog-footer">
        <p class="dialog-description">${pic.description}</p>
      </div>
    </div>
  `;
}

function loginTemplate() {
  return `
    <div class="login-card">
      <h4>Login</h4>
      <input type="email" placeholder="E-Mail">
      <input type="password" placeholder="Passwort">
      <button>Anmelden</button>
    </div>
  `;
}