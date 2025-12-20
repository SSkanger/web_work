// about.js - 学校介绍页脚本（保留原来的图片画廊切换功能）
document.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", function () {
      const parentGallery = this.closest(".about-image-gallery");
      const mainImage = parentGallery.querySelector(".main-image");
      const originalSrc = mainImage.src;
      const originalAlt = mainImage.alt;
      const thumbnailSrc = this.src;
      const thumbnailAlt = this.alt;

      // 切换图片和alt属性
      mainImage.style.opacity = "0";
      setTimeout(() => {
        mainImage.src = thumbnailSrc;
        mainImage.alt = thumbnailAlt;
        this.src = originalSrc;
        this.alt = originalAlt;
        mainImage.style.opacity = "1";
      }, 150);
    });
  });
});
