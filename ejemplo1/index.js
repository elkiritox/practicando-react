const butons =document.querySelectorAll('button');

butons.forEach(buton => {
    buton.addEventListener('click', () => {

        if(buton.classList.contains('liked')){
            buton.classList.remove('liked');
            buton.textContent = 'Me gusta';
        }else{
            buton.classList.add('liked');
            buton.textContent = 'Ya no me gusta';
        }
    });
});

