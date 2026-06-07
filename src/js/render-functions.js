import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const galleryRootElement = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  const imagesHTML = images
    .map(
      image =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${image.original}">
            <img
            class="gallery-image"
            src="${image.preview}"
            data-source="${image.original}"
            alt="${image.description}"
            width="350" height="200"
            />
            <div class="image-info">
              <div class="image-info-element">
                <span class="image-info-element-label">Likes</span>
                <span class="image-info-element-counter">${image.likes}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Views</span>
                <span class="image-info-element-counter">${image.views}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Comments</span>
                <span class="image-info-element-counter">${image.comments}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Downloads</span>
                <span class="image-info-element-counter">${image.downloads}</span>
              </div>
            </div>
        </a>
        </li>`
    )
    .join('\n');

  galleryRootElement.innerHTML = imagesHTML;
  simpleLightbox.refresh();
}

export function clearGallery() {
  galleryRootElement.innerHTML = '';
}

export function showLoader() {
  loader.style.display = '';
}

export function hideLoader() {
  loader.style.display = 'none';
}

hideLoader();
