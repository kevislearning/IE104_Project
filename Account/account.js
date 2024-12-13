import { user } from '../user.js';
import { services } from '../services.js';

$(document).ready(function () {
    $('#userName').text(user.name);
    $('#userEmail').text(user.email);
    $('#userPassword').text(user.password);

    const servicesList = $('#servicesList');
    servicesList.empty();
    user.services.forEach(serviceName => {
        const service = services.find(s => s.name === serviceName);
        if (service) {
            servicesList.append(`<li class="list-group-item">${service.name} - ${service.time}</li>`);
        }
    });

    $('#changePasswordBtn').click(function () {
        alert('Chức năng sẽ sớm được cập nhật.');
    });

    $('#logoutBtn').click(function () {
        localStorage.removeItem('user');
        localStorage.removeItem('avatar');
        window.location.href = '../Login/login.html';
    });

    $('#deleteAccountBtn').click(function () {
        alert('Chức năng sẽ sớm được cập nhật.');
    });
});