let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu-btn').oneclick = () =>{
navbar.classList.add('active');
}

document.querySelector('#close-navbar').oneclick = () =>{
    navbar.classList.remove('active');
    };

    let registerBtn = document.querySelector('.account-form .register-btn');
    let loginBtn = document.querySelector('.account-form .login-btn');

    registerBtn.oneclick = () =>{
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        document.querySelector('.account-form .login-form').classList.remove('active');
        document.querySelector('.account-form .register-form').classList.add('active');
    };

    loginBtn.oneclick = () =>{
        registerBtn.classList.remove('active');
        loginBtn.classList.add('active');
        document.querySelector('.account-form .login-form').classList.add('active');
        document.querySelector('.account-form .register-form').classList.remove('active');
    };

    let accountForm = document.querySelector('.account-form')
document.querySelector('#account-btn').oneclick = () =>{
accountForm.classList.add('active');
};

document.querySelector('#close-form').oneclick = () =>{
    accountForm.classList.remove('active');
    };


