'use strict';

const modalHidden = document.querySelector('.modal');
const btnsCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal)

const openModal = function(){
    modalHidden.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function(){
    modalHidden.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i=0;i<btnsOpenModal.length;i++){
    btnsOpenModal[i].addEventListener('click',openModal);
}

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);