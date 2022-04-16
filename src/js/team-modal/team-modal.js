import { refs } from "../bases/elems.js";

const openModal = refs.teamLink.addEventListener("click", onLinkClick);
const closeModal = refs.closeBtn.addEventListener("click", onLinkClick);

function onLinkClick(e){
    e.preventDefault();
    let btn = document.querySelector("#toTop");
    btn.classList.toggle('show');
    refs.teamModalEl.classList.toggle('is-hidden');
}
