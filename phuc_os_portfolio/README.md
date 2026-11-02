# 🎓 Digital Portfolio Cá Nhân — Lâm Hoàng Phúc (UTH)

> **Môn học:** Hệ Thống Công Nghệ Web  
> **Trường:** Đại học Giao thông Vận tải TP.HCM (UTH) — Khoa Công nghệ Thông tin  
> **Sinh viên:** Lâm Hoàng Phúc  
> **Mã số sinh viên (MSSV):** 079205028825  
> **Lớp học phần:** CNTT24CLC  
> **Điểm GPA:** 2.75 / 4.0 (Khá)  
> **Khu vực:** Củ Chi, TP. Hồ Chí Minh  
> **Email sinh viên:** phuclh8825@ut.edu.vn  
> **GitHub:** https://github.com/lamhoangphuc25  

---

## 📌 Giới Thiệu Đề Tài
Trang Portfolio cá nhân được thiết kế theo phong cách hiện đại, tinh tế và thân thiện với người dùng (Clean, Modern UI/UX). Bố cục giao diện mạch lạc, kết hợp giữa màu xanh đại dương (`#3e6ff4`) và nền trắng xám dịu mắt, thể hiện đầy đủ hồ sơ năng lực, quá trình đào tạo chuyên ngành tại UTH, các kỹ năng kỹ thuật và những dự án thực tế về **Lập trình Web & Machine Learning / Trực quan hóa dữ liệu**.

---

## 📂 Cấu Trúc Thư Mục Dự Án (Chuẩn Yêu Cầu Giữa Kỳ)

```text
phuc_os_portfolio/
│
├── index.html                  # File cấu trúc HTML5 Semantic hoàn chỉnh
├── README.md                   # Tài liệu thuyết minh đề tài & hướng dẫn
│
├── css/
│   └── style.css               # Mã CSS3, CSS Variables, Responsive & Hiệu ứng hover
│
├── js/
│   └── script.js               # Xử lý JavaScript: Theme dark/light, Nav cuộn, Filter & Form Validation
│
└── images/                     # Thư mục tài nguyên hình ảnh dự án
    ├── avatar_phuc.png         # Ảnh chân dung thực tế của sinh viên Lâm Hoàng Phúc
    ├── project_house_price.png # Ảnh mockup dự án Dự đoán giá nhà TP.HCM (Machine Learning)
    ├── project_email_spam.png  # Ảnh mockup dự án Phân loại Email Spam / Ham (NLP)
    ├── project_simustudent.png # Ảnh mockup đồ án nhóm SimuStudent (Công nghệ Web UTH)
    └── project_data_vis.png    # Ảnh mockup dự án Trực quan hóa dữ liệu tuyển sinh UTH
```

---

## 🚀 Các Tính Năng Nổi Bật Đáp Ứng 100% Rubric Chấm Điểm

### I. Nội Dung Portfolio (3.5đ)
1. **Header / Navbar:** Cố định trên đầu trang (Sticky), có liên kết mượt mà đến các section (`#home`, `#about`, `#education`, `#skills`, `#project`, `#contact`).
2. **Giới thiệu bản thân:** Họ tên Lâm Hoàng Phúc, ảnh đại diện thật, trường UTH, chuyên ngành CNTT, lớp CNTT24CLC, MSSV, quê quán Củ Chi.
3. **Mục tiêu nghề nghiệp:** Trình bày chi tiết định hướng ngắn hạn (làm chủ Web Fullstack & Machine Learning) và dài hạn (Software Engineer).
4. **Kỹ năng chuyên môn:** HTML5, CSS3, JavaScript, Bootstrap 5, Python, C/C++, MySQL, Scikit-learn, Git/GitHub.
5. **Học vấn & Hoạt động:** Liệt kê các môn học chuyên ngành đã học tại UTH (Cấu trúc dữ liệu & giải thuật, Cơ sở dữ liệu, Mạng máy tính, Trực quan hóa dữ liệu, Công nghệ Web); hoạt động học thuật và kỹ năng làm việc nhóm.
6. **Dự án cá nhân:** 4 dự án cụ thể kèm ảnh chụp màn hình mockup sắc nét, phân loại danh mục, mô tả chi tiết, tech stack và link mã nguồn:
   - *Dự đoán giá nhà khu vực TP.HCM (Machine Learning)*
   - *Phân loại Email Spam & Ham (Xử lý ngôn ngữ tự nhiên NLP)*
   - *SimuStudent — Ứng dụng mô phỏng học tập sinh viên (Đồ án nhóm Web UTH)*
   - *Trực quan hóa dữ liệu tuyển sinh & điểm chuẩn UTH*
7. **Chứng chỉ & Giải thưởng:** Trình bày minh bạch theo đúng đặc tả rubric (*"Chưa có - Đang trong lộ trình ôn luyện chứng chỉ TOEIC và Web Developer"*).

### II. Thiết Kế Giao Diện – HTML/CSS (2.5đ)
- Cấu trúc HTML chuẩn Semantic: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Layout Flexbox và CSS Grid cân đối, đồng bộ màu sắc và khoảng cách.
- Responsive hoàn hảo trên cả 3 kích thước: **Desktop**, **Tablet** và **Mobile**.
- Hiệu ứng CSS3 mượt mà: Transition, Transform translateY khi hover nút và thẻ dự án.

### III. JavaScript & Tương Tác (2.0đ)
- **Kiểm tra tính hợp lệ của Form Liên Hệ (Form Validation - Tiêu chí 15):**
  - Kiểm tra rỗng và độ dài họ tên.
  - Kiểm tra định dạng email bằng Regular Expression chuẩn RFC.
  - Kiểm tra tiêu đề và độ dài lời nhắn (tối thiểu 10 ký tự).
  - Đổi màu viền đỏ cảnh báo và hiển thị câu thông báo lỗi chi tiết bên dưới từng ô nhập.
  - Tự động xóa thông báo lỗi khi người dùng gõ phím.
  - Hiển thị hộp thoại chúc mừng màu xanh lá khi gửi thành công và làm mới form.
- **Chức năng tương tác bổ sung (Tiêu chí 14):**
  - Nút chuyển đổi giao diện **Sáng / Tối (Dark / Light Mode)** lưu trạng thái vào `localStorage`.
  - Bộ lọc dự án tương tác (**Project Filter Tabs**): Lọc theo *Tất cả*, *Machine Learning & Data*, *Web Development*.
  - Tự động đánh dấu mục điều hướng đang xem khi cuộn chuột (Active Scrollspy).
  - Nút cuộn nhanh lên đầu trang (Back to top) nổi lên khi cuộn qua 300px.
  - Menu responsive trên thiết bị di động (Mobile Hamburger Menu).

### IV. Chất Lượng Bài Làm (1.0đ)
- Mã nguồn sạch đẹp (Clean code), thụt lề 2 spaces chuẩn, chú thích tiếng Việt rõ ràng.
- Tổ chức source code thành 3 thư mục riêng biệt: `css/`, `js/`, `images/`.
- Thông tin cá nhân hóa 100% thuộc về sinh viên Lâm Hoàng Phúc.

---

## 💻 Hướng Dẫn Xem Trực Tuyến & Chạy Local
- **Chạy offline:** Mở file `index.html` trực tiếp bằng trình duyệt Google Chrome hoặc Microsoft Edge.
- **Xem online trên GitHub Pages:** `https://lamhoangphuc25.github.io/phuc-os/` (hoặc tên repository tương ứng).
