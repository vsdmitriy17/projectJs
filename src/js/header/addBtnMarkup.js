import { refs } from "../refs/refs.js";

export default function addBtnMarkup() {
  refs.headerContainerRef.insertAdjacentHTML(
    'beforeend',
    `
          <div class="btn-wrapper animate__animated animate__slideInDown">
              <button type="button" class="header-btn btn btn--current" data-load="watch">Watched</button>
              <button type="button" class="btn" data-load="qeue">Watchlist</button>
          </div>
          `,
  );
}
