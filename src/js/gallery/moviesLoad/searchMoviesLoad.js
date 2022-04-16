// import '..../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { refs } from ".../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
// import { btnLoadNextAdd, btnLoadNextRemove, btnLoadPrevAdd, btnLoadPrevRemove } from "../pagination/btnLoadMore.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function searchMoviesLoad() {
    
    galleryClean();

    try {
        const dataObj = await moviesApiService.fetchMoviesQuery();
        const dataMovies = dataObj.results;
        const dataGenresList = await moviesApiService.fetchGenresList(); // данные из API по запросу "жанры" (объект - { genres: (19) […] })
        const dataGenres = dataGenresList.genres;
        // console.log(dataObj);
        // console.log(dataMovies);

        if (dataObj.total_pages < 2) {
            // btnLoadNextRemove();
            // btnLoadPrevRemove();
        } else if (dataObj.page === 1 && dataObj.page < dataObj.total_pages) {
            // btnLoadNextAdd();
            // btnLoadPrevRemove();
        } else if (dataObj.page !== 1 && dataObj.page === dataObj.total_pages) {
            // btnLoadNextRemove();
            // btnLoadPrevAdd();
        } else {
            // btnLoadNextAdd();
            // btnLoadPrevAdd();
        };

        galleryCollectionCreate(dataMovies, dataGenres);

        if (dataMovies.length === 0) {
            return Notiflix.Notify.success('Sorry, there are no movies matching your search query. Please try again.');  
        };
        
    } catch (error) {
        errorCatch(error);
    };
}

export { searchMoviesLoad };