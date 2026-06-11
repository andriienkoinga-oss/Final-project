const logo = document.querySelector('#logo')
console.log(logo)
logo.addEventListener('click', () => {
    console.log('click')
    window.location.href = './index.html';
});

const joinBtn = document.querySelector('#btnJoin')
joinBtn.addEventListener('click', () => {
    window.location.href = './index2.html';
});

const signUp = document.querySelector('#signUp')
signUp.addEventListener('click', () => {
    window.location.href = './index2.html';
});