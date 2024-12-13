document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    const avatar = localStorage.getItem('avatar');
    if (user && avatar) {
      const authButtons = document.getElementById('auth-buttons');
      authButtons.innerHTML = `
        <div class="dropdown">
          <img src="${avatar}" alt="User Avatar" class="rounded-circle dropdown-toggle" width="40" height="40" id="avatarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="avatarDropdown">
            <li><a class="dropdown-item" href="../Account/account.html">Tài khoản</a></li>
            <li><a class="dropdown-item" href="../Purchase/purchase.html">Thanh toán</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#" id="logoutBtn">Đăng xuất</a></li>
          </ul>
        </div>
      `;
      document.getElementById('logoutBtn').addEventListener('click', function () {
        localStorage.removeItem('user');
        localStorage.removeItem('avatar');
        window.location.href = '../Landing/landing.html';
      });
    }
});