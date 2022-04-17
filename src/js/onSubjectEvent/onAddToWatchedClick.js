import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onAddToWatchClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    const addToWatchedBtn = document.querySelector('button[data-add="watched"]');
    if (!savedData) {
        const idStorage = {
            watched: [],
            hell: [],
        };

        idStorage.watched.push(moviesApiService.dataStorageObj);
        localStorage.setItem('saved-data', JSON.stringify(idStorage));
        addToWatchedBtn.textContent = "WATCHED";
        addToWatchedBtn.style.backgroundColor = "#c72121";
        addToWatchedBtn.disabled = true;
    } else {
        const newDataId = moviesApiService.dataStorageObj;
        const data = JSON.parse(savedData);
        if (data.watched.some(value => value.movieId_card === newDataId.movieId_card)) {
            addToWatchedBtn.textContent = " WATCHED";
            addToWatchedBtn.style.backgroundColor = "#c72121";
            addToWatchedBtn.disabled = true;
            return;
        };
        data.watched.push(newDataId);
        localStorage.setItem('saved-data', JSON.stringify(data));
        addToWatchedBtn.textContent = "WATCHED";
        addToWatchedBtn.style.backgroundColor = "#c72121";
        addToWatchedBtn.disabled = true;
    }
}

export { onAddToWatchClick };