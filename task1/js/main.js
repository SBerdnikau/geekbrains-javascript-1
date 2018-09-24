function init() {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}

function changeBigPicture(e){
    let appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    let eventElement = e.target;
    let imageNameParts = eventElement.id.split("_");
    let src = "img/" + imageNameParts[1] + ".jpg";
    if(src !== null){
        let imageDomElement = document.createElement("img");
        imageDomElement.src = src;
        appDiv.appendChild(imageDomElement);
    }else{
         console.log('no picture');
     }
}


window.onload = init();