/* ===== HÀM TIỆN ÍCH ===== */
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

/* ===== 1. DARK MODE (lưu lựa chọn bằng localStorage) ===== */
const themeBtn = $("#themeToggle");

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  themeBtn.textContent = theme === "dark" ? "☀️" : "🌙";
}

let savedTheme = "light";
try { savedTheme = localStorage.getItem("theme") || "light"; } catch (e) { /* bỏ qua */ }
applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) { /* bỏ qua */ }
});

/* ===== 2. MENU MOBILE ===== */
const burger = $("#burger");
const navMenu = $("#navMenu");

burger.addEventListener("click", () => {
  const open = navMenu.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
  burger.textContent = open ? "✕" : "☰";
});

$$(".nav__link").forEach(link =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    burger.setAttribute("aria-expanded", false);
    burger.textContent = "☰";
  })
);

/* ===== 3. HIỆU ỨNG GÕ CHỮ Ở BANNER ===== */
const roles = ["sinh viên Công nghệ Thông tin", "Software Developer", "AI Enthusiast", "Java & Python Coder"];
const typedEl = $("#typed");
let roleIndex = 0, charIndex = 0, deleting = false;

function typeEffect() {
  const word = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  typedEl.textContent = word.slice(0, charIndex);

  let delay = deleting ? 50 : 100;
  if (!deleting && charIndex === word.length) { deleting = true; delay = 1400; }
  else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 400; }
  setTimeout(typeEffect, delay);
}
typeEffect();

/* ===== 4. THANH KỸ NĂNG CHẠY KHI CUỘN TỚI ===== */
const barObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.level + "%";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });
$$(".bar__fill").forEach(bar => barObserver.observe(bar));

/* ===== 5. HIGHLIGHT MENU THEO SECTION + NÚT LÊN ĐẦU TRANG ===== */
const sections = $$("main section[id]");
const toTop = $("#toTop");

window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  sections.forEach(sec => {
    const link = $(`.nav__link[href="#${sec.id}"]`);
    if (!link) return;
    const active = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight;
    link.classList.toggle("is-active", active);
  });
  toTop.hidden = window.scrollY < 400;
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

/* ===== 6. LỌC DỰ ÁN ===== */
$$(".filter").forEach(btn =>
  btn.addEventListener("click", () => {
    $$(".filter").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const type = btn.dataset.filter;
    $$(".project").forEach(card =>
      card.classList.toggle("is-hidden", type !== "all" && card.dataset.category !== type)
    );
  })
);

/* ===== 7. MODAL CHI TIẾT DỰ ÁN ===== */
const projectData = {
  spam: {
    title: "Hệ thống Phát hiện & Phân loại Spam",
    meta: "Đồ án môn Trí tuệ Nhân tạo · 2024 · Python, Scikit-learn, NLP",
    points: [
      "Tiền xử lý văn bản: làm sạch dữ liệu, tách từ (Tokenization), loại bỏ stopwords và vector hóa bằng TF-IDF / Bag of Words.",
      "Huấn luyện Naive Bayes, SVM, Logistic Regression để phân loại tin nhắn rác (Spam) và hợp lệ (Ham).",
      "Đánh giá bằng Confusion Matrix, Precision, Recall và tối ưu hiệu năng phát hiện spam."
    ]
  },
  student: {
    title: "Hệ thống Quản lý Sinh viên & Điểm danh",
    meta: "Đồ án Lập trình Ứng dụng & CSDL · 2024 · SQL, Python, Java",
    points: [
      "Thiết kế cơ sở dữ liệu quan hệ (SQL) lưu trữ lớp học, sinh viên và lịch sử điểm danh.",
      "Xây dựng nghiệp vụ: thêm, sửa, xóa, tìm kiếm và tạo danh sách điểm danh tự động.",
      "Xử lý logic backend bằng Python/Java, tối ưu hóa truy vấn dữ liệu."
    ]
  },
  bookstore: {
    title: "Phân tích Thiết kế Hệ thống Bookstore Online",
    meta: "Đồ án Phân tích Thiết kế & Web · 2024 · HTML, CSS, ERD / UML",
    points: [
      "Mô hình hóa biểu đồ Use Case, sơ đồ dữ liệu DFD và thực thể liên kết ERD cho hệ thống bán sách.",
      "Xây dựng giao diện Frontend bằng HTML, CSS giúp người dùng duyệt sách và quản lý giỏ hàng.",
      "Chuẩn hóa cấu trúc CSDL quản lý sách, đơn hàng và khách hàng."
    ]
  }
};

const modal = $("#modal");
let lastFocused = null;

function openModal(id) {
  const data = projectData[id];
  $("#modalTitle").textContent = data.title;
  $("#modalMeta").textContent = data.meta;
  $("#modalList").innerHTML = data.points.map(p => `<li>${p}</li>`).join("");
  lastFocused = document.activeElement;
  modal.hidden = false;
  $("#modalClose").focus();
}

function closeModal() {
  modal.hidden = true;
  if (lastFocused) lastFocused.focus();
}

$$(".js-detail").forEach(btn =>
  btn.addEventListener("click", () => openModal(btn.closest(".project").dataset.id))
);
$("#modalClose").addEventListener("click", closeModal);
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* ===== 8. DEMO SPAM MINI (sáng tạo) ===== */
const spamWords = ["trúng thưởng", "miễn phí", "click", "bấm link", "khuyến mãi", "vay tiền", "nhận ngay", "100 triệu", "free", "winner", "giảm giá sốc"];

$("#spamBtn").addEventListener("click", () => {
  const text = $("#spamInput").value.trim().toLowerCase();
  const result = $("#spamResult");
  result.className = "demo__result";

  if (!text) {
    result.textContent = "Hãy nhập một tin nhắn để kiểm tra.";
    return;
  }
  const hits = spamWords.filter(word => text.includes(word));
  if (hits.length >= 2) {
    result.textContent = `🚫 SPAM (${hits.length} từ khóa đáng ngờ: ${hits.join(", ")})`;
    result.classList.add("is-spam");
  } else {
    result.textContent = "✅ HAM — tin nhắn có vẻ hợp lệ.";
    result.classList.add("is-ham");
  }
});

/* ===== 9. FORM LIÊN HỆ + KIỂM TRA DỮ LIỆU ===== */
const form = $("#contactForm");

function setError(fieldId, message) {
  $(`#${fieldId}Err`).textContent = message;
  $(`#${fieldId}`).closest(".field").classList.toggle("has-error", Boolean(message));
  return !message;
}

function validateForm() {
  const name = $("#name").value.trim();
  const email = $("#email").value.trim();
  const message = $("#message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const okName = setError("name", name.length < 2 ? "Vui lòng nhập họ tên (ít nhất 2 ký tự)." : "");
  const okEmail = setError("email", !emailPattern.test(email) ? "Email chưa hợp lệ, ví dụ: ten@gmail.com." : "");
  const okMessage = setError("message", message.length < 10 ? "Nội dung cần ít nhất 10 ký tự." : "");
  return okName && okEmail && okMessage;
}

form.addEventListener("submit", e => {
  e.preventDefault();
  const ok = $("#formOk");
  ok.textContent = "";
  if (validateForm()) {
    ok.textContent = "Đã gửi thành công! Mình sẽ phản hồi sớm nhất có thể.";
    form.reset();
  }
});

["name", "email", "message"].forEach(id =>
  $(`#${id}`).addEventListener("input", () => setError(id, ""))
);
