const hide = document.querySelector('.div')
const show = document.querySelector('.show')
const content = document.querySelector('.btn')

let ourStatus = 1;

hide.addEventListener('click', function(){
    if(ourStatus === 1){
        show.style.height = '100vh';
        content.style.display = "block";
        ourStatus = 0
    }else{
        show.style.height = '0vh';
        content.style.display = "none"
        ourStatus = 1;
    }
})



