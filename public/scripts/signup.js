export function login() {
    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const loginBtn = document.getElementById('signin-btn');
    const signupBtn = document.getElementById('signup-btn');
    

    loginForm.style.display = 'none';
    signupBtn.classList.add('active');

    loginBtn.addEventListener("click", ()=>{
        signupForm.style.display = 'none';
        loginForm.style.display = 'flex';
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    });
    signupBtn.addEventListener("click", ()=>{
        signupForm.style.display = 'flex';
        loginForm.style.display = 'none';
        loginBtn.classList.remove('active');
        signupBtn.classList.add('active');
    })




}