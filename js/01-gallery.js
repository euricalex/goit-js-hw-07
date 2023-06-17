import { galleryItems } from "./gallery-items.js";

// Change code below this line
console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li> `;
    })
    .join("");
}

galleryList.addEventListener("click", (onClick) => {
  if (onClick.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${onClick.target.dataset.source}" width="800" height="600">
`);

  instance.show();
  onClick.preventDefault();
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", event);
    }
  });
});
