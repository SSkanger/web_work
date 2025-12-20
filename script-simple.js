// 简化的导航功能
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 加载完成');
  
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  
  console.log('找到的导航链接数量:', navLinks.length);
  console.log('找到的板块数量:', sections.length);
  
  // 切换板块函数
  function switchSection(sectionId) {
    console.log('切换到板块:', sectionId);
    
    // 更新导航激活状态
    navLinks.forEach(link => {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    
    // 更新板块显示
    sections.forEach(section => {
      if (section.id === sectionId) {
        section.classList.add('active');
        section.style.display = 'block';
        console.log('显示板块:', section.id, '内容长度:', section.innerHTML.length);
      } else {
        section.classList.remove('active');
        section.style.display = 'none';
      }
    });
  }
  
  // 默认显示首页
  switchSection('home');
  
  // 导航链接点击事件
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const sectionId = this.getAttribute('data-section');
      console.log('点击导航链接:', sectionId);
      
      if (sectionId) {
        e.preventDefault();
        switchSection(sectionId);
      }
    });
  });
});