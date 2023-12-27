function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");
    var successMessage = document.getElementById("successMessage");

    if (username === "admin" && password === "admin") {
        successMessage.textContent = "Đăng nhập thành công!";
        errorMessage.textContent = "";
    } else {
        errorMessage.textContent = "Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.";
        successMessage.textContent = "";
    }
}


