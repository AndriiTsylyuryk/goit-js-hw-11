import './js/pixabay-api';
import { getImages  } from './js/pixabay-api';
import { imagesRender } from './js/render-functions';



import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';



const form = document.querySelector('.search');
const input = document.querySelector('.input');
const container = document.querySelector('.pictures');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  container.innerHTML = '';

  const query = event.target.elements.field.value.trim();
  console.log(query)

  if (!query) {
    iziToast.error({
      title: 'Error',
      message:
        '"Sorry, there are no images matching your search query. Please try again!"',
      position: 'topRight',
    });
    return;
  }

  getImages(query).then(data => {
    console.log(data)
    if (data) {
      imagesRender(data.hits);
    } else {
      throw Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
  }).catch(error => {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
  })
 
  
}

