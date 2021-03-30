const buttonpage = document.getElementById('click');
let  clickCount = 0;
let divCount = document.querySelector('div');

const clickpage = () => {
buttonpage.addEventListener('click', () => {
clickCount = clickCount + 1
divCount.innerText = clickCount
})
}
clickpage();
