import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './render-functions';
import { getImagesByQuery } from './pixabay-api';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const term = form.elements['search-text'].value.trim();
  if (!term) {
    return;
  }

  const searchResponse = getImagesByQuery(term);
  showLoader();
  clearGallery();
  searchResponse
    .then(items => {
      if (items.length) {
        createGallery(items);
      } else {
        iziToast.info({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      hideLoader();
    })
    .catch(e => {
      iziToast.error(`Error happened: ${e.message}`);
      hideLoader();
    });
});
