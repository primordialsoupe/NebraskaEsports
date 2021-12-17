let indexValue = 1;
function slideShow() {
    setTimeout(slideShow, 5000);
    let x;
    let img = document.getElementsByClassName("imgGallery");
    for (x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    }
    indexValue++;
    if (indexValue > img.length) { indexValue = 1 }
    img[indexValue - 1].style.display = "block";
}
slideShow();