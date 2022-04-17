import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { clickCard } from "../modal.js"
import { idMovieLoad } from "../moviesLoad/idMovieLoad.js";
import { movieCardCreate, movieCardClean } from "../moviesGalleryCreate/movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function onGalleryCardClick(evt) {
    if (!evt.target.classList.contains('description_films')) {
    return;
    }

    moviesApiService.movie_id = evt.target.dataset.id;
    await idMovieLoad(evt);

    const addToWatchedBtn = document.querySelector('button[data-add="watched"]');
    const addToHellBtn = document.querySelector('button[data-add="queue"]');
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
        addToHellBtn.textContent = "IN WATCHLIST";
        addToHellBtn.style.backgroundColor = "#c72121";
        addToHellBtn.disabled = true;
    } else {
        addToHellBtn.textContent = "ADD TO WATCHLIST";
        addToHellBtn.style.backgroundColor = "#4f4fbd";
        addToHellBtn.disabled = false;
    };

    // console.log("ID=", moviesApiService.movie_id);
}

export { onGalleryCardClick };