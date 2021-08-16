document.getElementById('login-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-input');
    const userTotal = userEmail.value;
    // console.log('ananna');

    // password
    const userPassword = document.getElementById('user-password');
    const userPasswordTotal = userPassword.value;
    // console.log('I am a cute');

    if (userTotal == 'soytan@gmail.com' && userPasswordTotal == 1234) {
        window.location.href = 'bank.html';
    }
    else {
        console.log('not correct');
    }
});
