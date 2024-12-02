
import{user} from '../user.js';

$(document).ready(function () {
    $('#userName').text(user.name);
    $('#userEmail').text(user.email);
    $('#userPassword').text(user.password);
    $('#subscriptionTime').text(user.subscriptionTime);

    const servicesList = $('#servicesList');
    servicesList.empty();
    user.services.forEach(service => {
        servicesList.append(`<li class="list-group-item">${service}</li>`);
    });

    $('#changePasswordBtn').click(function () {
        // Handle change password logic here
        alert('Change password functionality to be implemented.');
    });

    $('#logoutBtn').click(function () {
        // Handle log out logic here
        alert('Log out functionality to be implemented.');
    });

    $('#deleteAccountBtn').click(function () {
        // Handle delete account logic here
        alert('Delete account functionality to be implemented.');
    });
});