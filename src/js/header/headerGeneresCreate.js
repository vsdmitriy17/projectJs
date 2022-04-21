import { refs } from '../refs/refs';
import svgIcon from '/images/sprite.svg';
import { moviesApiService } from "../moviesGallery.js";

async function headerGeneresCreate() {
    generesClean();

    refs.headerGeneresFilter.insertAdjacentHTML(
        'beforeend', `
                        <li class="header-generes-item">
                            <input type="radio" name="headerGenere" value="all" id="forAll" class="header-generes-input" checked />
                            <label for="forAll" class="header-generes-label">
                                <svg class="header-generes-radio-icon">
                                    <use href="${svgIcon}#icon-header-radio-check"></use>
                                </svg>
                                All
                            </label>
                        </li>
                    `);

    const dataGen = await moviesApiService.fetchGenresList();
    generesCreate(dataGen);
}

function generesCreate(dataGen) {
    refs.headerGeneresFilter.insertAdjacentHTML(
    'beforeend',
    dataGen.genres.map(({ id, name }) => {
        
        return `
                    <li class="header-generes-item">
                        <input type="radio" name="headerGenere" value="${name}" id="${id}" class="header-generes-input" />
                        <label for="${id}" class="header-generes-label">
                            <svg class="header-generes-radio-icon">
                                <use href="${svgIcon}#icon-header-radio-check"></use>
                            </svg>
                            ${name}
                        </label>
                    </li>
                `;
    }).join(''),
    );
}

function generesClean() {
    refs.headerGeneresFilter.innerHTML = '';
}

function headerYearCreate() {
    yearClean();

    refs.headerYearFilter.insertAdjacentHTML(
        'beforeend', `
                        <li class="header-year-item">
                            <input type="radio" name="headerYear" value="all" id="forAllyear" class="header-year-input" checked />
                            <label for="forAllyear" class="header-year-label">
                                <svg class="header-year-radio-icon">
                                    <use href="${svgIcon}#icon-header-radio-check"></use>
                                </svg>
                                All
                            </label>
                        </li>
                    `);

    yearCreate();
}

function yearCreate() {
    const arrey = ["1930-1939", "1930-1939","1940-1949","1950-1959","1960-1969","1970-1979","1980-1989","1990-1999","2000-2009","2010-2019","2020-2022" ];
    refs.headerYearFilter.insertAdjacentHTML(
    'beforeend',
    arrey.map(arr => {
        
        return `
                    <li class="header-year-item">
                        <input type="radio" name="headerYear" value="${arr}" id="y${arr}" class="header-year-input" />
                        <label for="y${arr}" class="header-year-label">
                            <svg class="header-year-radio-icon">
                                <use href="${svgIcon}#icon-header-radio-check"></use>
                            </svg>
                            ${arr}
                        </label>
                    </li>
                `;
    }).join(''),
    );
}

function yearClean() {
    refs.headerYearFilter.innerHTML = '';
}

export { headerGeneresCreate, headerYearCreate };