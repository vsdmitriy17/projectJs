import { refs } from "../bases/elems.js";
import addBtnMarkup from './addBtnMarkup';
import changeHeaderStyles from './changeHeaderStyles';

export default function onMyLibraryClick(e) {
  e.preventDefault();

  if (e.currentTarget.className.includes('current-link')) return;

  refs.searchFormRef.classList.add('animate__animated', 'animate__slideOutDown');
  setTimeout(() => {
    refs.searchFormRef.style.display = 'none';
    changeHeaderStyles();
    addBtnMarkup();
    refs.searchFormRef.classList.remove('animate__animated', 'animate__slideOutDown');
  }, 300);
}
