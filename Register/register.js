$(document).ready(function () {
	$("form").submit(function (event) {
		event.preventDefault();

		const name = $("#floatingName").val();
		const email = $("#floatingEmail").val();
		const password = $("#floatingPassword").val();
		const confirmPassword = $("#floatingConfirmPassword").val();

		if (password !== confirmPassword) {
			alert("Mật khẩu không khớp.");
			return;
		}

		const newUser = {
			name: name,
			email: email,
			password: password,
			services: [],
		};

		localStorage.setItem("user", JSON.stringify(newUser));
		localStorage.setItem("avatar", "../user-avatar.png");

		alert("Tạo tài khoản thành công!");
		window.location.href = "../Landing/landing.html";
	});
});
