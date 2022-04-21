import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { moviesApiService } from "../moviesGallery.js";
// import { setOnDatabase } from '../firebase/firebaseAuth';
// import { getOnDatabase } from '../firebase/firebaseAuth';
import { notiflixOptions, notiflixReportOptions } from "../utils/notiflixOptions.js";

function onAddToWatchClick(evt) {
    const savedData = localStorage.getItem('saved-data');
    // const savedData = await getOnDatabase();
    const addToWatchedBtn = document.querySelector('button[data-add="watched"]');
    if (!savedData) {
        const idStorage = {
            watched: [],
            hell: [],
        };

        idStorage.watched.push(moviesApiService.dataStorageObj);
        localStorage.setItem('saved-data', JSON.stringify(idStorage));
        // setOnDatabase(JSON.stringify(idStorage));
        addToWatchedBtn.textContent = "WATCHED";
        addToWatchedBtn.style.backgroundColor = "#FF6B01";
        addToWatchedBtn.style.color = "#FFFFFF";
        addToWatchedBtn.style.borderColor = "#FF6B01";
    } else {
        const newDataId = moviesApiService.dataStorageObj;
        const data = JSON.parse(savedData);
        if (data.watched.some(value => value.movieId_card === newDataId.movieId_card)) {
            data.watched = data.watched.filter(value => value.movieId_card !== newDataId.movieId_card);
            localStorage.setItem('saved-data', JSON.stringify(data));
            // setOnDatabase(JSON.stringify(data));
            addToWatchedBtn.textContent = " ADD TO WATCHED";
            addToWatchedBtn.style.backgroundColor = "#FFFFFF";
            addToWatchedBtn.style.color = "#000000";
            addToWatchedBtn.style.borderColor = "#000000";
            return;
        };
        data.watched.push(newDataId);
        localStorage.setItem('saved-data', JSON.stringify(data));
        // setOnDatabase(JSON.stringify(data));
        addToWatchedBtn.textContent = "WATCHED";
        addToWatchedBtn.style.backgroundColor = "#FF6B01";
        addToWatchedBtn.style.color = "#FFFFFF";
        addToWatchedBtn.style.borderColor = "#FF6B01";
    }
}

export { onAddToWatchClick };