// Chờ HTML load xong mới chạy hiệu ứng
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.member-card');
    
    // Hiệu ứng Fade-in tuần tự cho các thẻ thành viên
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150); // Mỗi thẻ hiện cách nhau 0.15s
    });
});