document.addEventListener("DOMContentLoaded", () => {
  const avatarImage = document.getElementById("avatarImage");
  const avatarFileInput = document.getElementById("avatarFileInput");
  const avatarContainer = document.getElementById("avatarContainer");
  const btnUploadAvatar = document.getElementById("btnUploadAvatar");
  const btnPromptUrl = document.getElementById("btnPromptUrl");
  const btnPrint = document.getElementById("btnPrint");

  const savedAvatar = localStorage.getItem("user_cv_avatar");
  if (savedAvatar) {
    avatarImage.src = savedAvatar;
  }
  btnUploadAvatar.addEventListener("click", () => {
    avatarFileInput.click();
  });

  avatarContainer.addEventListener("click", () => {
    avatarFileInput.click();
  });
  avatarFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const resultUrl = event.target.result;
        avatarImage.src = resultUrl;
        try {
          localStorage.setItem("user_cv_avatar", resultUrl);
        } catch (err) {
          console.warn("Không thể lưu ảnh vào LocalStorage do dung lượng lớn.");
        }
      };
      reader.readAsDataURL(file);
    }
  });

  btnPromptUrl.addEventListener("click", () => {
    const url = prompt("Nhập đường dẫn (URL) ảnh chân dung của bạn:");
    if (url && url.trim() !== "") {
      avatarImage.src = url.trim();
      try {
        localStorage.setItem("user_cv_avatar", url.trim());
      } catch (err) {
        console.warn("Không thể lưu URL vào LocalStorage.");
      }
    }
  });
  btnPrint.addEventListener("click", () => {
    window.print();
  });
});