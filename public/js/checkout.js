document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('showAdditionalInfo');
    var inputs = document.querySelectorAll('.toggle-input');

    // Ẩn tất cả các input khi trang tải
    inputs.forEach(function(input) {
        input.style.display = 'none';
    });

    // Thêm sự kiện khi checkbox thay đổi trạng thái
    checkbox.addEventListener('change', function() {
        inputs.forEach(function(input) {
            // Thêm hoặc loại bỏ lớp 'show-input' tùy thuộc vào trạng thái của checkbox
            input.classList.toggle('show-input', checkbox.checked);
        });
    });
});

