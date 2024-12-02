import { user } from '../user.js';

$(document).ready(function () {
    $('form').submit(function (event) {
        event.preventDefault();

        const email = $('#floatingInput').val();
        const password = $('#floatingPassword').val();

        if (email === user.email && password === user.password) {
            localStorage.setItem('user', JSON.stringify(user));

            window.location.href = '../Landing/landing.html';
        } else {
            alert('Incorrect email or password.');
        }
    });
});