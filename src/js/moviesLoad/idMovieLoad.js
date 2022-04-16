// import '..../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { clickCard } from "../modal.js"
import { movieCardCreate, movieCardClean } from "../moviesGalleryCreate/movieCardCreate.js";
import { onAddToHellClick } from "../onSubjectEvent/onAddToHellClick.js";
import { onAddToWatchClick } from "../onSubjectEvent/onAddToWatchedClick";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function idMovieLoad(evt) {
    clickCard(evt)
    movieCardClean();

    try {
        const dataObj = await moviesApiService.fetchMovieId();
        // console.log(dataObj);
        // console.log(moviesApiService.dataStorageObj)

        movieCardCreate(dataObj);
        const addToWatchedBtn = document.querySelector('button[data-add="watched"]');
        const addToQeueBtn = document.querySelector('button[data-add="queue"]');
        addToWatchedBtn.addEventListener('click', onAddToWatchClick);
        addToQeueBtn.addEventListener('click', onAddToHellClick);

        
    } catch (error) {
        errorCatch(error);
    };
}

export { idMovieLoad };