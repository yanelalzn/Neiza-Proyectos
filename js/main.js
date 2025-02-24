const buttons = document.querySelectorAll('button');
var header = document.getElementById('Header');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )


window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY

    if(scroll>4){
        header.style.backgroundColor = '#ffff'
        header.style.top = '0'
    }else{
        header.style.backgroundColor = 'transparent'
        header.style.top = 'auto'
        header.style.padding = '0 4rem'
    }
})