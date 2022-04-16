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
import { movieCardCreate, movieCardClean } from "../moviesGalleryCreate/movieCardCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function idMovieLoad(evt) {
    onClickCard(evt)
    movieCardClean();

    try {
        const dataObj = await moviesApiService.fetchMovieId();
        // console.log(dataObj);
        // console.log(moviesApiService.dataStorageObj)

        movieCardCreate(dataObj);

        
    } catch (error) {
        errorCatch(error);
    };
}

export { idMovieLoad };