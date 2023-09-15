const cube=document.querySelector(".cube");
const changeBtn=document.querySelector(".btn"); 

function lalka() {
    const random='#'+Math.floor(Math.random()*16777215).toString(16);
    cube.style.backgroundColor=random;
    console.log(random);
}

changeBtn.addEventListener("click", lalka);