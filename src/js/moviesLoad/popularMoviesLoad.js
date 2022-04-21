import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import { errorCatch } from "../utils/errorCatch.js";
import { galleryCollectionCreate, galleryClean } from "../moviesGalleryCreate/galleryCreate.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';



async function popularMoviesLoad() {
    
    try {
        const dataGenresList = await moviesApiService.fetchGenresList(); // данные из API по запросу "жанры" (объект - { genres: (19) […] })
        galleryClean();
        moviesApiService.resetPage();
        const dataMoviesPopular = await moviesApiService.fetchMoviesPopular(); // данные из API по запросу "популярные фильмы" (объект - { page: 1, results: (20) […], total_pages: 33054, total_results: 661074 })
        const dataGenres = dataGenresList.genres; // массив объектов [{ id: 28, name: "Action" } ..... { id: 76, name: "Horor" }]
        const dataMoviesPop = dataMoviesPopular.results; // массив объектов фильмов [{ adult: false, backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg", id: 406759, … } ...]
        // console.log(dataMoviesPopular.total_results);
        // console.log(dataGenresList);
        // console.log(dataGenres);
        
        galleryCollectionCreate(dataMoviesPop, dataGenres);
        if (refs.paginationConteiner.classList.contains("paginationNone")) {
            refs.paginationConteiner.classList.remove("paginationNone");
        };

        options.totalItems = dataMoviesPopular.total_results;

        const pagination = new Pagination('pagination', options);
        pagination.on('afterMove', async e => {
            galleryClean();
            const { page } = e;
            moviesApiService.page = page;
            const dataMoviesPopular = await moviesApiService.fetchMoviesPopular(); // данные из API по запросу "популярные фильмы" (объект - { page: 1, results: (20) […], total_pages: 33054, total_results: 661074 })
            const dataGenres = dataGenresList.genres; // массив объектов [{ id: 28, name: "Action" } ..... { id: 76, name: "Horor" }]
            const dataMoviesPop = dataMoviesPopular.results; // массив объектов фильмов [{ adult: false, backdrop_path: "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg", id: 406759, … } ...]
            // console.log(dataMoviesPop);
            // console.log(dataGenresList);
            // console.log(dataGenres);
        
            galleryCollectionCreate(dataMoviesPop, dataGenres);
        });

    } catch (error) {
        errorCatch(error);
    };
};

const options = {
    totalItems: 1000,
    itemsPerPage: 20,
       visiblePages: 7,
        centerAlign: false,
    page: 1,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
};
if (window.innerWidth < 767) {
    options.visiblePages = 4;
}


export { popularMoviesLoad };