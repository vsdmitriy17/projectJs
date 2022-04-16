// import '..../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

async function popularMoviesLoad() {
    galleryClean();
    try {
        const dataMoviesPopular = await moviesApiService.fetchMoviesPopular(); // данные из API по запросу "популярные фильмы" (объект - { page: 1, results: (20) […], total_pages: 33054, total_results: 661074 })
        const dataGenresList = await moviesApiService.fetchGenresList(); // данные из API по запросу "жанры" (объект - { genres: (19) […] })
        const dataGenres = dataGenresList.genres; // массив объектов [{ id: 28, name: "Action" } ..... { id: 76, name: "Horor" }]
        const dataMoviesPop = dataMoviesPopular.results; // массив объектов фильмов [{ adult: false, backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg", id: 406759, … } ...]
        // console.log(dataMoviesPop);
        // console.log(dataGenresList);
        // console.log(dataGenres);

        if (dataMoviesPopular.total_pages < 2) {
            // btnLoadNextRemove();
            // btnLoadPrevRemove();
        } else if (dataMoviesPopular.page === 1 && dataMoviesPopular.page < dataMoviesPopular.total_pages) {
            // btnLoadNextAdd();
            // btnLoadPrevRemove();
        } else if (dataMoviesPopular.page !== 1 && dataMoviesPopular.page === dataMoviesPopular.total_pages) {
            // btnLoadNextRemove();
            // btnLoadPrevAdd();
        } else {
            // btnLoadNextAdd();
            // btnLoadPrevAdd();
        };

        galleryCollectionCreate(dataMoviesPop, dataGenres);

    } catch (error) {
        errorCatch(error);
    };
};

export { popularMoviesLoad };