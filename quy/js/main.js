// ===================================================
//  SKILL BAR ANIMATION (chạy khi tải trang xong)
// ===================================================
window.addEventListener('load', function () {
    var bars = document.querySelectorAll('.skill-bar-fill');
    bars.forEach(function (bar) {
        var width = bar.getAttribute('data-width');
        bar.style.width = width + '%';
    });
});

// ===================================================
//  TIMELINE FADE-IN (IntersectionObserver)
// ===================================================
var timelineItems = document.querySelectorAll('.timeline-item');

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, idx) {
        if (entry.isIntersecting) {
            setTimeout(function () {
                entry.target.classList.add('visible');
            }, idx * 120);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

timelineItems.forEach(function (item) {
    observer.observe(item);
});
