// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const galleryMarkUp = createGalleryItemsLibrary(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkUp);

function createGalleryItemsLibrary(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${preview}">
         <img class="gallery__image" src="${original}" alt="${description}" 
         width ="360"
         />
      </a>
   </li>`;
    })
    .join('');
}
galleryContainer.style.listStyle = 'none';

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
