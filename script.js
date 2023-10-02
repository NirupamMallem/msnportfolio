// mobile toggler 
let menubtn = document.getElementById('menu')

menubtn.addEventListener('click' , function(e)
{
   document.querySelector('body').classList.toggle('mobile-nav-active');
   this.classList.toggle('fa-xmark')
})

// typing effect 
let typed = new Typed('.auto-input',{
    strings : ['Front-End Developer!','Content-Creator!','Explorer!','Trading Enthusiast'],
    typespeed:100,
    backspeed:100,
    backDelay:2000,
    loop:true,
})

var btnposition = 'right';

    function checkValidation(){
        const email = document.forms['signin-form']['email'].value;
        //const password = document.forms['signin-form']['pass'].value;
        const button = document.getElementById('submit-btn').style;
        const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if( btnposition == 'right'){
            button.float = 'left';
            btnposition = 'left';
            return false;   
        }
        else if( btnposition == 'left'){
            button.float = 'right';
            btnposition = 'right';
            return false;
        }
       
    }
var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;
var manualNav = function(manual)

{
    slides.forEach((slide) => 
    {
        slide.classList.remove('active');
        btns.forEach((btn) =>
        {
            btn.classList.remove('active');
        });
    });


    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach(
    (btns,i)=> 
    {
        btns.addEventListener("click",()=>
        {
            manualNav(i);
            currentSlide=i;
        });
    }
);

var repeat = function(activeClass)
{
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeator = () => {
        setTimeout(function(){
         [...active].forEach((activeSlide) => {
            activeSlide.classList.remove('active');
         });
         slides[i].classList.add('active');
         btns[i].classList.add('active');
         i++;
         if(slides.length==i)
         {
            i=0;
         }
         if(i>= slides.length)
         {
            return;
         }
         repeator();
        },1000);
    }
    repeator()
}
repeat();


var div = document.getElementById('abst');
var display =0;

function hideShow()
{
    if(display==1)
    {
        div.style.display = 'block';
        display=0;
    }
    else
    {
        div.style.display='none';
        display=1;
    }
}

