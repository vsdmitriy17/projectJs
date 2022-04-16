  import { refs } from "./refs/refs.js";

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    e.preventDefault();
    refs.modal.classList.toggle('profile-hidden');
  }
