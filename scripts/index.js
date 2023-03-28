

/* function editarPerfil(){
    const modal = document.querySelector('.modal');
    modal.classList.add('modal-visibility')
    console.log('editar...');
}
const btn__editar = document.querySelector('.btn__edit-image');
btn__editar.addEventListener('click' , editarPerfil);
 */
function cerrarModal(){
    const modal = document.querySelector('.modal');
    modal.classList.add('modal-visibility');
    modal.style.zindex = '-10';
    console.log('cerrando...');
}
const btn_close = document.querySelector('.modal__close-image');
btn_close = addEventListener('click', cerrarModal);