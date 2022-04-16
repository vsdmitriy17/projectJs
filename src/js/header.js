import 'animate.css';
import { refs } from "./bases/elems.js";
import onHomeClick from './header/onHomeClick';
import onLogoClick from './header/onLogoClick';
import onMyLibraryClick from './header/onMyLibraryClick';
import onSearchFormSubmit from './header/onSearchFormSubmit';

refs.searchFormRef.addEventListener('submit', onSearchFormSubmit);
refs.headerMyLibraryRef.addEventListener('click', onMyLibraryClick);
refs.headerHomeRef.addEventListener('click', onHomeClick);
refs.headerLogoRef.addEventListener('click', onLogoClick);

refs.headerMyLibraryRef.addEventListener('mousedown', e => e.preventDefault());
refs.headerHomeRef.addEventListener('mousedown', e => e.preventDefault());
refs.headerLogoRef.addEventListener('mousedown', e => e.preventDefault());
