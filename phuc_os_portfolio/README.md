# 🖥️ PHUC.OS — Digital Portfolio Cá Nhân

> **Đồ án Giữa kỳ môn:** Hệ Thống Công Nghệ Web  
> **Trường:** Đại học Giao thông Vận tải TP.HCM (UTH) — Khoa Công nghệ Thông tin  
> **Sinh viên thực hiện:** Lâm Hoàng Phúc  
> **Mã số sinh viên:** 079205028825  
> **Lớp học phần:** CNTT24CLC  

---

## 📌 Giới Thiệu Đề Tài
**PHUC.OS** là trang Digital Portfolio cá nhân được phát triển với concept giao diện hệ điều hành cổ điển (**Retro Desktop Terminal OS**). Trang web mô phỏng trải nghiệm người dùng trên máy tính cá nhân với hệ thống đa cửa sổ ứng dụng, thanh điều hướng Taskbar động, đồng hồ kỹ thuật số thời gian thực và biểu mẫu liên hệ có xác thực JavaScript thuần.

---

## 📂 Cấu Trúc Thư Mục Dự Án (Chuẩn Rubric Yêu Cầu)

```text
phuc_os_portfolio/
│
├── index.html              # Trang chủ giao diện Desktop OS & Semantic HTML5
├── README.md               # Tài liệu thuyết minh dự án và hướng dẫn sử dụng
│
├── css/
│   └── style.css           # Toàn bộ mã định dạng CSS3, CSS Variables, Responsive & Custom Scrollbar
│
├── js/
│   └── script.js           # Xử lý tương tác đa cửa sổ, Taskbar z-index & Form Validation JS
│
└── images/                 # Thư mục lưu trữ tài nguyên hình ảnh dự án
    ├── avatar_phuc.png     # Ảnh chân dung cá nhân sinh viên
    ├── project_simustudent.png # Ảnh chụp màn hình Mockup đồ án nhóm SimuStudent
    ├── project_phucos.png  # Ảnh chụp màn hình Mockup đồ án PHUC.OS
    └── project_labs.png    # Ảnh chụp màn hình Mockup bài tập tuần Web UTH
```

---

## 🚀 Các Tính Năng Nổi Bật Đáp Ứng Rubric Chấm Điểm

1. **Giao diện Desktop OS Độc Đáo:**
   - 8 ứng dụng hệ thống: `PROFILE.EXE`, `STUDY.EXE`, `SKILLS.EXE`, `PROJECTS.EXE`, `AWARDS.EXE`, `GAME.LOG`, `MUSIC.BOX`, `CONTACT.EXE`.
   - Cửa sổ có thanh tiêu đề, nút đóng (`×`), cơ chế quản lý thứ tự hiển thị `z-index` và thu nhỏ toàn bộ bằng nút `[START]`.

2. **Cấu trúc HTML5 Semantic & Clean Code:**
   - Sử dụng đúng chuẩn các thẻ cấu trúc: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
   - Thẻ `<meta>` chuẩn SEO, viewport, description và accessibility (`aria-label`, `aria-hidden`, `aria-live`).

3. **Thiết kế Giao diện CSS3 & Responsive:**
   - Phối màu Retro Neon Terminal: Xanh lá (`#65ffb0`), Cyan (`#54dfff`), Hồng (`#ff73c8`) trên nền tối (`#101719`).
   - Hiệu ứng quét dòng màn hình CRT scanlines, hoạt họa máy phát nhạc cassette và thanh equalizer động.
   - Hỗ trợ hiển thị mượt mà trên cả 3 kích thước: **Desktop**, **Tablet** và **Mobile**.

4. **Xử Lý JavaScript & Form Validation:**
   - **Đồng hồ thời gian thực (Real-time Clock):** Cập nhật chính xác giờ địa phương trên thanh Taskbar.
   - **Xác thực biểu mẫu liên hệ (Form Validation):** Kiểm tra rỗng, độ dài tối thiểu, kiểm tra định dạng email bằng Regular Expression (Regex), hiển thị lỗi viền đỏ trực quan và thông báo kết quả.

---

## 🛠️ Công Nghệ Sử Dụng
- **Frontend Core:** HTML5, CSS3, JavaScript (ES6+ Vanilla).
- **Fonts & Icons:** Google Fonts (`IBM Plex Mono`), Pixel / Unicode Glyphs.
- **Tools:** Visual Studio Code, Chrome DevTools, Git / GitHub.

---

## 💻 Hướng Dẫn Mở & Trải Nghiệm
1. Tải về hoặc mở thư mục `phuc_os_portfolio/`.
2. Mở file `index.html` bằng trình duyệt bất kỳ (Google Chrome, Microsoft Edge, Firefox, Brave,...).
3. Nhấp đúp hoặc chạm vào các biểu tượng ứng dụng trên màn hình để xem thông tin chi tiết.
