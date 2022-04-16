import { refs } from "./refs/refs.js";

refs.buttonClose.addEventListener('click', onClickCloseButton);

// refs.cardList.addEventListener('click', onClickCard);

function clickCard(e) {
  if (!e.target.classList.contains('description_films')) {
    return;
  }
  document.body.style.overflow = 'hidden';
  refs.modalEl.classList.remove('modal-window--hidden');
  window.addEventListener('keydown', OnCloseModalEsc);
  refs.modalEl.addEventListener('click', onClickBackdrop);
}

function onClickCloseButton() {
  refs.modalEl.classList.add('modal-window--hidden');
  removeOverflow();
}

function onClickBackdrop(e) {
  e.target.classList.contains('backdrop') ? refs.modalEl.classList.add('modal-window--hidden') : false;
  removeOverflow();
}

function OnCloseModalEsc(e) {
  if (e.code === 'Escape') {
    refs.modalEl.classList.add('modal-window--hidden');
    removeOverflow();
    window.removeEventListener('keydown', OnCloseModalEsc);
  }
}

function removeOverflow() {
  document.body.style.overflow = '';
}

export { clickCard };
