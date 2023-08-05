
const inputs=document.querySelectorAll('input');

function focusFunc(){
    let parent=this.parentNode;
    parent.classList.add('focus')
    }

inputs.forEach((input)=>{input.addEventListener('focus',focusFunc)});
inputs.forEach((input)=>{input.addEventListener('blur',blurfunc)});

function blurfunc(){
    let parent=this.parentNode;
    if(this.value===""){
        parent.classList.remove('focus')
        }
}

const hamburger=document.querySelector('.ham-burger');
document.querySelector('.ham-burger').getAttribute('aria-expanded')
hamburger.addEventListener('click',()=>{
    let ariaExpanded=document.querySelector('.ham-burger').getAttribute('aria-expanded')
    
    if(ariaExpanded==='false'){
        document.querySelector('.ham-burger').setAttribute('aria-expanded',true);
        document.querySelector('.fa-solid').classList.remove('fa-bars')
        document.querySelector('.fa-solid').classList.add('fa-xmark')
        document.querySelector('.nav').classList.add('nav-transition')

    }
    else{
        document.querySelector('.ham-burger').setAttribute('aria-expanded',false);
        document.querySelector('.fa-solid').classList.remove('fa-xmark')
        document.querySelector('.fa-solid').classList.add('fa-bars')
        document.querySelector('.nav').classList.remove('nav-transition')

    }

   
})
