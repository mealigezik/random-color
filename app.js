const text = document.getElementById(`display`);
const btn = document.getElementById(`btn`);
const b = document.getElementById(`b`);


btn.addEventListener(`click`, (e) =>{
    //The number 16,777,215 is the total possible combinations of RGB(255,255,255)
    const x =`#` + Math.floor(Math.random()*16777215).toString(16);
    b.style.backgroundColor = x;
    text.innerHTML = `Your random color is ${x}`;
})