import axios from 'axios';

/*
request type:
key — твій унікальний ключ доступу до API.
q — слово для пошуку. Те, що буде вводити користувач.
image_type — тип зображення. Потрібні тільки фотографії, тому постав значення photo.
orientation — орієнтація фотографії. Постав значення horizontal.
safesearch — фільтр за віком. Постав значення true.

return type:
webformatURL — посилання на маленьке зображення для списку карток у галереї
largeImageURL — посилання на велике зображення для модального вікна
tags — рядок з описом зображення. Підійде для атрибута alt
likes — кількість вподобайок
views — кількість переглядів
comments — кількість коментарів
downloads — кількість 
*/

const basePixabayUrl = 'https://pixabay.com/api/';
const apiKey = '56207103-4b28cc7dd0dd3e21e461efeb9';

export function getImagesByQuery(query) {
  const queryString = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  }).toString();

  return axios.get(`${basePixabayUrl}?${queryString}`).then(response =>
    response.data.hits.map(hit => ({
      preview: hit.webformatURL,
      original: hit.largeImageURL,
      description: hit.tags,
      likes: hit.likes,
      views: hit.views,
      comments: hit.comments,
      downloads: hit.downloads,
    }))
  );
}
