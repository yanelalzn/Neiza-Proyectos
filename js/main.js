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
        header.style.backgroundColor = 'rgba(0,0,0,0.17)'
        header.style.padding = ' 1rem 5rem 0 4rem'
        // header.style.top = '0'
    }else{
        header.style.backgroundColor = ''
        header.style.padding = ' 3rem 5rem 0 4rem'

    }
})