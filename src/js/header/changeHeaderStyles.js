import { refs } from "../refs/refs.js";

export default function changeHeaderStyles() {
  refs.headerRef.classList.toggle('header--bg-color');
  refs.headerHomeRef.classList.toggle('current-link');
  refs.headerMyLibraryRef.classList.toggle('current-link');
  refs.headerContainerRef.classList.toggle('header-container--library');
}
