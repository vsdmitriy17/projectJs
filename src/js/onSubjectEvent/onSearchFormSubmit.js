// import '..../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
// import { btnLoadNextAdd, btnLoadNextRemove, btnLoadPrevAdd, btnLoadPrevRemove } from "../pagination/btnLoadMore.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { searchMoviesLoad } from "../moviesLoad/searchMoviesLoad.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function onSearchFormSubmit(evt) {
    evt.preventDefault();
    const name = refs.inputEl.value.trim(); // текущее значение inputEl (текст введенный в inputEl), с игнорированием пробелов (trim())
    if (name === "") {
        return Notiflix.Report.warning('WORNING!', 'Please enter request.', 'Ok');
    };
    evt.target.reset();
    moviesApiService.resetPage();
    // elems.currentPageEl.textContent = moviesApiService.page;
    moviesApiService.searchQuery = name;
    try {
        await searchMoviesLoad();
        
    } catch (error) {
        errorCatch(error);
    };
};

export { onSearchFormSubmit };