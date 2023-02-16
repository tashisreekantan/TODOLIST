const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', handleLogin);
function handleLogin(event) {
  event.preventDefault(); 
    const username = document.querySelector('#username-input').value;
    const password = document.querySelector('#password-input').value;
    if(username ==='' || password === ''){
        const errorBox = document.querySelector('#error-box');
        errorBox.innerHTML = 'Empty field';
        errorBox.style.display = 'block';
    }
    else if (username === 'admin' && password === '12345') {
        window.location.href = 'mainpage.html';
    } else {

        const errorBox = document.querySelector('#error-box');
        errorBox.textContent = 'Incorrect username or password';
     errorBox.style.display = 'block';
  }
}
