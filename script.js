let currentIndex = 0;

function init() {
loadPictures()
}


function loadPictures(){
    const container = document.getElementById('picturesOne')
    container.innerHTML= "";
    
    for (let i = 0; i < pictureBookOne.length; i++) {
        container.innerHTML += getPictureTemplate(i);
        
    }
}
