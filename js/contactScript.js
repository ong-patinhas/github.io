// image modal
const allGalleryItem = document.querySelectorAll(".gallery-item");
const imgModalDiv = document.getElementById("img-modal-box");
const modalCloseBtn = document.getElementById("modal-close-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
let imgIndex = 0;

allGalleryItem.forEach((galleryItem) => {
  galleryItem.addEventListener("click", () => {
    imgModalDiv.style.display = "block";
    let imgSrc = galleryItem.querySelector("img").src;
    imgIndex = parseInt(imgSrc.split("-")[1].substring(0, 1));
    showImageContent(imgIndex);
  });
});

// next click
nextBtn.addEventListener("click", () => {
  imgIndex++;
  if (imgIndex > allGalleryItem.length) {
    imgIndex = 1;
  }
  showImageContent(imgIndex);
});

// previous click
prevBtn.addEventListener("click", () => {
  imgIndex--;
  if (imgIndex <= 0) {
    imgIndex = allGalleryItem.length;
  }
  showImageContent(imgIndex);
});

function showImageContent(index) {
  imgModalDiv.querySelector(
    "#img-modal img"
  ).src = `../img/gallery-${index}.jpg`;
}

modalCloseBtn.addEventListener("click", () => {
  imgModalDiv.style.display = "none";
});
