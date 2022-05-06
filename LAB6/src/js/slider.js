let offset = 0;// смещение от левого края
const sliderLine= document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset +=300;
    if(offset > 600){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});
document.querySelector('.slider-prev').addEventListener('click', function(){
    offset -=300;
    if(offset < 00){
        offset = 600;
    }
    sliderLine.style.left = -offset + 'px';
});
