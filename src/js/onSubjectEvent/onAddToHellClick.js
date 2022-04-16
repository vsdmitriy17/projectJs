// import '.../sass/main.scss';
//Библиотеки Notiflix, SimpleLightbox
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// элементы, классы, ф-ции
import { refs } from "../refs/refs.js";
import { moviesApiService } from "../moviesGallery.js";
import MoviesApiService from "../MoviesApiService/moviesApiService.js";
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onAddToHellClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    const addToHellBtn = document.querySelector('button[data-add="queue"]');
    if (!savedData) {
        const idStorage = {
            watched: [],
            hell: [],
        };

        idStorage.hell.push(moviesApiService.dataStorageObj);
        localStorage.setItem('saved-data', JSON.stringify(idStorage));
        addToHellBtn.textContent = "IN HELL";
        addToHellBtn.style.backgroundColor = "#c72121";
        addToHellBtn.disabled = true;
    } else {
        const newDataId = moviesApiService.dataStorageObj;
        const data = JSON.parse(savedData);
        if (data.hell.some(value => value.movieId_card === newDataId.movieId_card)) {
            addToHellBtn.textContent = "IN HELL";
            addToHellBtn.style.backgroundColor = "#c72121";
            addToHellBtn.disabled = true;
            return;
        };
        data.hell.push(newDataId);
        localStorage.setItem('saved-data', JSON.stringify(data));
        addToHellBtn.textContent = "IN HELL";
        addToHellBtn.style.backgroundColor = "#c72121";
        addToHellBtn.disabled = true;
    }
}

export { onAddToHellClick };