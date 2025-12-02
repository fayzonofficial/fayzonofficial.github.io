const toRegister = document.getElementById('to-register');
const toLogin = document.getElementById('to-login');

const authBlock = document.querySelector('.enter');
const registerBlock = document.querySelector('.reg');

toRegister.addEventListener('click', (e) => {
  e.preventDefault();
  authBlock.style.display = 'none';
  registerBlock.style.display = 'block';
});

toLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerBlock.style.display = 'none';
  authBlock.style.display = 'block';
});

document.getElementById("main_reg").addEventListener("click", function () {
    window.location.href = "Main.html"; 
});

document.getElementById("main_enter").addEventListener("click", function () {
    window.location.href = "Main.html"; 
});
