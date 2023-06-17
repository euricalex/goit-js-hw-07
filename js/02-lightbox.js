import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryList = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", itemsMarkup);
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li> `;
    })
    .join("");
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
