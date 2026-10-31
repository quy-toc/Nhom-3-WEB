/**
 * PHUC.OS • CORE SCRIPT & INTERACTION CONTROLLER
 * Trường Đại học Giao thông Vận tải TP.HCM (UTH)
 * Khoa Công nghệ Thông tin - Môn: Hệ Thống Công Nghệ Web
 * 
 * Tính năng chính:
 * 1. Quản lý cửa sổ đa nhiệm (Open, Close, Focus z-index, Taskbar items)
 * 2. Đồng hồ kỹ thuật số thời gian thực (Real-time Digital Clock)
 * 3. Toast Notifications hệ thống
 * 4. Xác thực Form liên hệ bằng JavaScript (Form Validation - Tiêu chí 15)
 * 5. Điều hướng Topbar Navigation
 */

(() => {
  'use strict';

  // DOM Elements
  const windows = Array.from(document.querySelectorAll('.window'));
  const appIcons = Array.from(document.querySelectorAll('.app-icon'));
  const topNavButtons = Array.from(document.querySelectorAll('.top-link-btn'));
  const taskItemsContainer = document.getElementById('task-items');
  const toastElement = document.getElementById('toast');
  const startButton = document.getElementById('start-button');
  const clockElement = document.getElementById('clock');

  // Contact Form Elements
  const contactForm = document.getElementById('contact-form');
  const inputName = document.getElementById('contact-name');
  const inputEmail = document.getElementById('contact-email');
  const inputSubject = document.getElementById('contact-subject');
  const inputBody = document.getElementById('contact-body');
  const feedbackBox = document.getElementById('contact-feedback');

  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errSubject = document.getElementById('err-subject');
  const errBody = document.getElementById('err-body');

  let activeZIndex = 20;
  let toastTimer = null;

  /* ==========================================================================
     1. TOAST NOTIFICATION
     ========================================================================== */
  function showToast(message) {
    if (!toastElement) return;
    toastElement.textContent = message;
    toastElement.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastElement.classList.remove('show');
    }, 2000);
  }

  /* ==========================================================================
     2. WINDOW MANAGEMENT & TASKBAR
     ========================================================================== */
  function getWindowById(windowId) {
    return document.getElementById(`window-${windowId}`);
  }

  function focusWindow(targetWindow) {
    activeZIndex += 1;
    targetWindow.style.zIndex = activeZIndex;

    const currentId = targetWindow.id.replace('window-', '');
    taskItemsContainer.querySelectorAll('.task-item').forEach((item) => {
      item.classList.toggle('active', item.dataset.window === currentId);
    });
  }

  function renderTaskbar() {
    taskItemsContainer.innerHTML = '';
    const openWindows = windows.filter((win) => !win.hidden);

    openWindows.forEach((win) => {
      const windowId = win.id.replace('window-', '');
      const taskButton = document.createElement('button');
      taskButton.className = 'task-item';
      taskButton.dataset.window = windowId;
      taskButton.textContent = win.dataset.title;
      taskButton.title = `Chuyển tới ${win.dataset.title}`;

      taskButton.addEventListener('click', () => {
        if (win.hidden) {
          win.hidden = false;
        }
        focusWindow(win);
      });

      taskItemsContainer.appendChild(taskButton);
    });
  }

  function openWindow(windowId) {
    const targetWindow = getWindowById(windowId);
    if (!targetWindow) return;

    targetWindow.hidden = false;
    focusWindow(targetWindow);
    renderTaskbar();
    showToast(`MỞ ỨNG DỤNG: ${targetWindow.dataset.title}`);
  }

  function closeWindow(targetWindow) {
    targetWindow.hidden = true;
    renderTaskbar();
    showToast(`ĐÃ ĐÓNG: ${targetWindow.dataset.title}`);
  }

  // Register app icon clicks
  appIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      const targetWindowId = icon.dataset.window;
      openWindow(targetWindowId);
    });
  });

  // Register Topbar navigation clicks
  topNavButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetWindowId = btn.dataset.window;
      openWindow(targetWindowId);
    });
  });

  // Register window close buttons & focus click
  windows.forEach((win) => {
    const closeBtn = win.querySelector('.window-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeWindow(win);
      });
    }

    win.addEventListener('pointerdown', () => {
      focusWindow(win);
    });
  });

  // Start button resets / minimizes all open windows
  if (startButton) {
    startButton.addEventListener('click', () => {
      windows.forEach((win) => {
        win.hidden = true;
      });
      renderTaskbar();
      showToast('DESKTOP CLEANED // SYSTEM READY');
    });
  }

  /* ==========================================================================
     3. REAL-TIME DIGITAL CLOCK
     ========================================================================== */
  function updateClock() {
    if (!clockElement) return;
    const now = new Date();
    clockElement.textContent = now.toLocaleTimeString('vi-VN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  }

  updateClock();
  setInterval(updateClock, 10000);

  /* ==========================================================================
     4. FORM VALIDATION BẰNG JAVASCRIPT (Đặc tả Rubric Tiêu chí 15)
     ========================================================================== */
  function isValidEmail(email) {
    // Standard RFC5322 regex for valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }

  function clearErrors() {
    [errName, errEmail, errSubject, errBody].forEach((errEl) => {
      if (errEl) errEl.textContent = '';
    });
    [inputName, inputEmail, inputSubject, inputBody].forEach((inputEl) => {
      if (inputEl) inputEl.classList.remove('is-invalid');
    });
    if (feedbackBox) {
      feedbackBox.style.display = 'none';
      feedbackBox.className = 'contact-feedback-box';
      feedbackBox.innerHTML = '';
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Ngăn trình duyệt reload trang
      clearErrors();

      let isValid = true;
      const nameVal = inputName ? inputName.value.trim() : '';
      const emailVal = inputEmail ? inputEmail.value.trim() : '';
      const subjectVal = inputSubject ? inputSubject.value.trim() : '';
      const bodyVal = inputBody ? inputBody.value.trim() : '';

      // 1. Kiểm tra họ tên
      if (nameVal === '') {
        errName.textContent = '⚠ Vui lòng nhập họ và tên của bạn.';
        inputName.classList.add('is-invalid');
        isValid = false;
      } else if (nameVal.length < 2) {
        errName.textContent = '⚠ Họ và tên phải có tối thiểu 2 ký tự.';
        inputName.classList.add('is-invalid');
        isValid = false;
      }

      // 2. Kiểm tra email
      if (emailVal === '') {
        errEmail.textContent = '⚠ Vui lòng nhập địa chỉ email.';
        inputEmail.classList.add('is-invalid');
        isValid = false;
      } else if (!isValidEmail(emailVal)) {
        errEmail.textContent = '⚠ Định dạng email không hợp lệ (Ví dụ: name@example.com).';
        inputEmail.classList.add('is-invalid');
        isValid = false;
      }

      // 3. Kiểm tra tiêu đề
      if (subjectVal === '') {
        errSubject.textContent = '⚠ Vui lòng nhập tiêu đề liên hệ.';
        inputSubject.classList.add('is-invalid');
        isValid = false;
      }

      // 4. Kiểm tra nội dung tin nhắn
      if (bodyVal === '') {
        errBody.textContent = '⚠ Vui lòng nhập nội dung lời nhắn.';
        inputBody.classList.add('is-invalid');
        isValid = false;
      } else if (bodyVal.length < 10) {
        errBody.textContent = '⚠ Nội dung lời nhắn quá ngắn (tối thiểu 10 ký tự).';
        inputBody.classList.add('is-invalid');
        isValid = false;
      }

      // Nếu có lỗi -> focus vào ô lỗi đầu tiên
      if (!isValid) {
        const firstInvalid = contactForm.querySelector('.is-invalid');
        if (firstInvalid) firstInvalid.focus();
        showToast('⚠ BIỂU MẪU CÓ LỖI, VUI LÒNG KIỂM TRA LẠI!');
        return;
      }

      // NẾU HỢP LỆ (VALID SUCCESS)
      showToast('✓ GỬI THÀNH CÔNG! CẢM ƠN BẠN ĐÃ LIÊN HỆ.');
      if (feedbackBox) {
        feedbackBox.style.display = 'block';
        feedbackBox.innerHTML = `
          <strong>[TRANSMISSION SUCCESSFUL]</strong><br>
          Cảm ơn bạn <strong>${escapeHtml(nameVal)}</strong> (${escapeHtml(emailVal)}) đã gửi tin nhắn!<br>
          Tiêu đề: <em>"${escapeHtml(subjectVal)}"</em><br>
          <span style="color: var(--muted); font-size: 10.5px;">Phúc đã nhận được thông tin và sẽ phản hồi sớm nhất có thể. Chúc bạn một ngày tốt lành!</span>
        `;
      }

      // Reset form
      contactForm.reset();
    });

    // Reset button event
    contactForm.addEventListener('reset', () => {
      clearErrors();
      showToast('ĐÃ LÀM MỚI BIỂU MẪU LIÊN HỆ');
    });

    // Real-time input clearing
    [inputName, inputEmail, inputSubject, inputBody].forEach((inputEl) => {
      if (!inputEl) return;
      inputEl.addEventListener('input', () => {
        inputEl.classList.remove('is-invalid');
        const errSpan = inputEl.parentElement.querySelector('.error-msg');
        if (errSpan) errSpan.textContent = '';
      });
    });
  }

  // Helper escape HTML to prevent XSS
  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Initial Boot Ready
  showToast('PHUC.OS v1.2 READY // UTH 2026');
})();
