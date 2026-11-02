
document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     1. THEME TOGGLE (DARK / LIGHT MODE)
     ========================================================================== */
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const themeIcon = document.getElementById('theme-icon');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';

  // Apply saved theme
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('portfolio-theme', 'light');
        if (themeIcon) themeIcon.textContent = '🌙';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('portfolio-theme', 'dark');
        if (themeIcon) themeIcon.textContent = '☀️';
      }
    });
  }

  /* ==========================================================================
     2. MOBILE NAVBAR TOGGLE
     ========================================================================== */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navList = document.getElementById('nav-list');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.classList.toggle('mobile-open');
    });

    // Close mobile menu when clicking any nav link
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        navList.classList.remove('mobile-open');
      });
    });
  }

  /* ==========================================================================
     3. ACTIVE NAVIGATION LINK ON SCROLL & BACK TO TOP BUTTON
     ========================================================================== */
  const sections = document.querySelectorAll('section[id], div[id].main_container_home');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });

    // Back to top button visibility
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     4. PROJECT FILTER TABS
     ========================================================================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card-item');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================================================
     5. CONTACT FORM VALIDATION (Tiêu chí 15 Rubric)
     ========================================================================== */
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const feedbackBox = document.getElementById('contact-feedback');

  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errSubject = document.getElementById('err-subject');
  const errMessage = document.getElementById('err-message');

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  function clearErrors() {
    [errName, errEmail, errSubject, errMessage].forEach((el) => {
      if (el) el.textContent = '';
    });
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (input) input.classList.remove('is-invalid');
    });
    if (feedbackBox) {
      feedbackBox.style.display = 'none';
      feedbackBox.className = 'contact-feedback-box';
      feedbackBox.textContent = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      clearErrors();

      let isValid = true;
      const nameVal = nameInput ? nameInput.value.trim() : '';
      const emailVal = emailInput ? emailInput.value.trim() : '';
      const subjectVal = subjectInput ? subjectInput.value.trim() : '';
      const messageVal = messageInput ? messageInput.value.trim() : '';

      // 1. Kiểm tra Họ và Tên
      if (nameVal === '') {
        errName.textContent = 'Vui lòng nhập họ và tên của bạn.';
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else if (nameVal.length < 2) {
        errName.textContent = 'Họ và tên phải có tối thiểu 2 ký tự.';
        nameInput.classList.add('is-invalid');
        isValid = false;
      }

      // 2. Kiểm tra Email
      if (emailVal === '') {
        errEmail.textContent = 'Vui lòng nhập địa chỉ email.';
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        errEmail.textContent = 'Định dạng email không hợp lệ (Ví dụ: name@example.com).';
        emailInput.classList.add('is-invalid');
        isValid = false;
      }

      // 3. Kiểm tra Tiêu đề
      if (subjectVal === '') {
        errSubject.textContent = 'Vui lòng nhập tiêu đề liên hệ.';
        subjectInput.classList.add('is-invalid');
        isValid = false;
      }

      // 4. Kiểm tra Lời nhắn
      if (messageVal === '') {
        errMessage.textContent = 'Vui lòng nhập nội dung tin nhắn.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else if (messageVal.length < 10) {
        errMessage.textContent = 'Nội dung tin nhắn cần tối thiểu 10 ký tự.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) {
        // Focus vào ô lỗi đầu tiên
        const firstErr = contactForm.querySelector('.is-invalid');
        if (firstErr) firstErr.focus();
        return;
      }

      // Submit thành công
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.className = 'contact-feedback-box success';
        feedbackBox.innerHTML = `
          <strong>✓ Gửi tin nhắn thành công!</strong><br>
          Cảm ơn bạn <strong>${escapeHtml(nameVal)}</strong> đã liên hệ. Phúc đã nhận được thông tin và sẽ phản hồi qua email <em>${escapeHtml(emailVal)}</em> sớm nhất có thể!
        `;
      }

      contactForm.reset();
    });

    // Real-time error removal
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (!input) return;
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        const errEl = input.parentElement.querySelector('.error-text');
        if (errEl) errEl.textContent = '';
      });
    });
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
});
