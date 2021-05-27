import './sass/main.scss';
import cardTmpl from './templates/card-tmpl.hbs';
import debounce from 'lodash.debounce';
import { infoNotice, errorNotice } from './js/notifications.js';
import getRefs from './js/refs.js';
import ApiService from './js/api-service.js';

const refs = getRefs();
const imageSearch = new ApiService();

refs.search.addEventListener('input', debounce(onInputChange, 1500));
refs.loadBtn.addEventListener('click', fetchGalleryImages);

function onInputChange(e) {
  imageSearch.query = e.target.value;
  clearGalleryMarkup();

  if (!imageSearch.query) {
    refs.loadBtn.classList.add('hidden');
  } else {
    imageSearch.resetPage();
    fetchGalleryImages();
  }
}

function fetchGalleryImages() {
  imageSearch.fetchImages().then(createGallery).catch(createErrorNotice);
}

function createGallery(images) {
  if (images.length === 0) {
    return createInfoNotice();
  } else {
    makeGalleryMarkup(images);
    refs.loadBtn.classList.remove('hidden');
    scrollOnLoadBtnClick();
  }
}

function makeGalleryMarkup(images) {
  refs.gallery.insertAdjacentHTML('beforeend', cardTmpl(images));
}

function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
}

function scrollOnLoadBtnClick() {
  refs.loadBtn.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}

function createInfoNotice() {
  infoNotice.open();
}

function createErrorNotice() {
  errorNotice.open();
}
