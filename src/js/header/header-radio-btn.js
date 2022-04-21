import { refs } from "../refs/refs.js";

refs.headerGeneresBtn.addEventListener('click', onHeaderGeneresBtnClick);
refs.headerGeneresForm.addEventListener('change', onHeaderGeneresBtnNameChange);

function onHeaderGeneresBtnClick(evt) {
    refs.headerGeneresList.classList.toggle("header-radio-none");
    refs.headerGeneresBtnIconUp.classList.toggle("header-radio-none");
    refs.headerGeneresBtnIconDown.classList.toggle("header-radio-none");
    window.addEventListener('keydown', onEscGeneresClick);
}

function onHeaderGeneresBtnNameChange(evt) {
    refs.headerGeneresName.textContent = evt.currentTarget.elements.headerGenere.value;
}

function onEscGeneresClick(e) {
    if (e.code === 'Escape') {
        refs.headerGeneresList.classList.toggle("header-radio-none");
        refs.headerGeneresBtnIconUp.classList.toggle("header-radio-none");
        refs.headerGeneresBtnIconDown.classList.toggle("header-radio-none");
        window.removeEventListener('keydown', onEscGeneresClick);
    }
}

// ------------------------------------------------------------------------------

refs.headerYearBtn.addEventListener('click', onHeaderYearBtnClick);
refs.headerYearForm.addEventListener('change', onHeaderYearBtnNameChange);

function onHeaderYearBtnClick(evt) {
    refs.headerYearList.classList.toggle("header-radio-none");
    refs.headerYearBtnIconUp.classList.toggle("header-radio-none");
    refs.headerYearBtnIconDown.classList.toggle("header-radio-none");
    window.addEventListener('keydown', onEscYearClick);
}

function onHeaderYearBtnNameChange(evt) {
    refs.headerYearName.textContent = evt.currentTarget.elements.headerYear.value;
}

function onEscYearClick(e) {
    if (e.code === 'Escape') {
        refs.headerYearList.classList.toggle("header-radio-none");
        refs.headerYearBtnIconUp.classList.toggle("header-radio-none");
        refs.headerYearBtnIconDown.classList.toggle("header-radio-none");
        window.removeEventListener('keydown', onEscYearClick);
    }
}

// --------------------------------------------------------------------------

refs.headerLangBtn.addEventListener('click', onHeaderLangBtnClick);
refs.headerLangForm.addEventListener('change', onHeaderLangBtnNameChange);

function onHeaderLangBtnClick(evt) {
    refs.headerLangList.classList.toggle("header-radio-none");
    refs.headerLangBtnIconUp.classList.toggle("header-radio-none");
    refs.headerLangBtnIconDown.classList.toggle("header-radio-none");
    window.addEventListener('keydown', onEscLangClick);
}

function onHeaderLangBtnNameChange(evt) {
    refs.headerLangName.textContent = evt.currentTarget.elements.headerLang.value;
}

function onEscLangClick(e) {
    if (e.code === 'Escape') {
        refs.headerLangList.classList.toggle("header-radio-none");
        refs.headerLangBtnIconUp.classList.toggle("header-radio-none");
        refs.headerLangBtnIconDown.classList.toggle("header-radio-none");
        window.removeEventListener('keydown', onEscLangClick);
    }
}

