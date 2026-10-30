(() => {
  const windows = [...document.querySelectorAll('.window')];
  const icons = [...document.querySelectorAll('.app-icon')];
  const taskItems = document.getElementById('task-items');
  const toast = document.getElementById('toast');
  const startButton = document.getElementById('start-button');
  const clock = document.getElementById('clock');
  let zIndex = 10, toastTimer;
  function showToast(message) { toast.textContent = message; toast.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove('show'), 1800); }
  function getWindow(id) { return document.getElementById(`window-${id}`); }
  function focusWindow(win) { zIndex += 1; win.style.zIndex = zIndex; taskItems.querySelectorAll('.task-item').forEach(item => item.classList.toggle('active', item.dataset.window === win.id.replace('window-', ''))); }
  function renderTaskbar() {
    taskItems.innerHTML = '';
    windows.filter(win => !win.hidden).forEach(win => {
      const id = win.id.replace('window-', ''), button = document.createElement('button');
      button.className = 'task-item'; button.dataset.window = id; button.textContent = win.dataset.title; button.title = `Chuyển tới ${win.dataset.title}`;
      button.addEventListener('click', () => { win.hidden = false; focusWindow(win); }); taskItems.appendChild(button);
    });
  }
  function openWindow(id) { const win = getWindow(id); if (!win) return; win.hidden = false; focusWindow(win); renderTaskbar(); showToast(`${win.dataset.title} OPENED`); }
  function closeWindow(win) { win.hidden = true; renderTaskbar(); showToast(`${win.dataset.title} CLOSED`); }
  icons.forEach(icon => icon.addEventListener('click', () => openWindow(icon.dataset.window)));
  windows.forEach(win => { win.querySelector('.window-close').addEventListener('click', () => closeWindow(win)); win.addEventListener('pointerdown', () => focusWindow(win)); });
  startButton.addEventListener('click', () => { windows.forEach(win => { win.hidden = true; }); renderTaskbar(); showToast('DESKTOP READY'); });
  document.getElementById('contact-message').addEventListener('click', () => { document.getElementById('contact-feedback').textContent = 'Thanks for visiting! Hẹn gặp bạn ở một dự án tiếp theo.'; });
  function updateClock() { clock.textContent = new Date().toLocaleTimeString('vi-VN', {hour:'2-digit', minute:'2-digit', hour12:false}); }
  updateClock(); setInterval(updateClock, 30000); showToast('PHUC.OS READY');
})();
