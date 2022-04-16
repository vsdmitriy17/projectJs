import '..../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { refs } from ".../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { onClickCard } from ".../modal.js"
import { idMovieLoad } from "../moviesLoad/idMovieLoad.js";
import { movieCardCreate, movieCardClean } from "../moviesGalleryCreate/movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function onGalleryCardClick(evt) {
    if (!e.target.classList.contains('description_films')) {
    return;
    }

    moviesApiService.movie_id = evt.target.dataset.id;
    await idMovieLoad(evt);

    const addToWatchedBtn = document.querySelector('.btn--current');
    const addToHellBtn = document.querySelector('.btn--current-modal');
    const savedData = localStorage.getItem('saved-data');
    if (!savedData) {
            return;
        };
    const newDataId = moviesApiService.dataStorageObj;
    const data = JSON.parse(savedData);
    if (data.watched.some(value => value.movieId_card === newDataId.movieId_card)) {
        addToWatchedBtn.textContent = "WATCHED";
        addToWatchedBtn.style.backgroundColor = "#c72121";
        addToWatchedBtn.disabled = true;
    } else {
        addToWatchedBtn.disabled = false;
        addToWatchedBtn.style.backgroundColor = "#4f4fbd";
        addToWatchedBtn.textContent = "ADD TO WATCHED";
    };

    if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
        addToHellBtn.textContent = "IN HELL";
        addToHellBtn.style.backgroundColor = "#c72121";
        addToHellBtn.disabled = true;
    } else {
        addToHellBtn.textContent = "ADD TO HELL";
        addToHellBtn.style.backgroundColor = "#4f4fbd";
        addToHellBtn.disabled = false;
    };

    // console.log("ID=", moviesApiService.movie_id);
}

export { onGalleryCardClick };