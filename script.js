// ========== 页面切换功能（修复快速链接） ==========
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sectionButtons = document.querySelectorAll('[data-section]');
  const sections = document.querySelectorAll('.section');
  
  console.log('找到的板块数量:', sections.length);
  sections.forEach(section => {
    console.log('板块ID:', section.id, '类名:', section.className);
  });
  
  console.log('找到的导航链接数量:', navLinks.length);
  navLinks.forEach(link => {
    console.log('导航链接:', link.getAttribute('data-section'), '文本:', link.textContent);
  });
  
  // 初始化所有板块为隐藏状态
  sections.forEach(section => {
    section.style.display = 'none';
  });
  
  // 检查URL中的锚点，如果有则切换到对应板块，否则显示首页
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.substring(1); // 去掉#号
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      console.log('检测到URL锚点:', sectionId, '，直接显示对应板块');
      // 立即显示目标板块，不使用延迟
      switchSection(sectionId);
    } else {
      // 如果锚点对应的板块不存在，显示首页
      switchSection('home');
    }
  } else {
    // 如果没有锚点，显示首页
    switchSection('home');
  }
  
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  // 切换板块函数
  function switchSection(sectionId) {
    console.log('切换到板块:', sectionId); // 添加调试信息
    
    // 更新导航激活状态
    navLinks.forEach(link => {
      console.log('导航链接状态:', link.getAttribute('data-section'), link.classList.contains('active'));
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
        console.log('添加active类到导航:', sectionId);
      } else {
        link.classList.remove('active');
      }
    });

    // 更新板块显示
    sections.forEach(section => {
      if (section.id === sectionId) {
        // 显示目标板块
        section.classList.add('active');
        section.style.display = 'block';
        section.style.visibility = 'visible';
        section.style.opacity = '1';
        section.style.position = 'static';
        
        // 确保板块在正确的位置（header之后）
        const header = document.querySelector('header');
        if (header && section.previousElementSibling !== header) {
          // 将板块移到header后面
          header.parentNode.insertBefore(section, header.nextSibling);
        }
      } else {
        // 隐藏其他板块
        section.classList.remove('active');
        section.style.display = 'none';
      }
    });
  }

  // 导航链接点击事件
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const sectionId = this.getAttribute('data-section');
      const href = this.getAttribute('href');
      console.log('点击导航链接:', sectionId, href); // 添加调试信息
      
      // 如果是学校介绍链接，允许默认跳转行为
      if (href && href.includes('about.html')) {
        console.log('跳转到学校介绍页面');
        return; // 允许默认跳转行为
      }
      
      // 如果是校园地图链接，允许默认跳转行为
      if (href && href.includes('map.html')) {
        console.log('跳转到校园地图页面');
        return; // 允许默认跳转行为
      }
      
      // 如果是生活服务链接，允许默认跳转行为
      if (href && href.includes('life.html')) {
        console.log('跳转到生活服务页面');
        return; // 允许默认跳转行为
      }
      
      // 如果有data-section属性，则切换板块
      if (sectionId) {
        e.preventDefault();
        switchSection(sectionId);
      }
      // 否则，允许默认行为（跳转到其他页面）
    });
  });

  // 所有带data-section属性的按钮点击事件
  sectionButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      if (this.tagName === 'A' && !this.hasAttribute('target')) {
        e.preventDefault();
      }
      const sectionId = this.getAttribute('data-section');
      if (sectionId) {
        switchSection(sectionId);
        
        // 如果是锚点链接，滚动到指定位置
        const href = this.getAttribute('href');
        if (href && href.includes('#') && href !== '#') {
          setTimeout(() => {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          }, 300);
        }
      }
    });
  });

  // 内部锚点链接处理
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      // 只处理本页面的锚点链接
      if (href === '#' || href.startsWith('#/') || this.hasAttribute('target') || href.includes('about.html')) {
        return;
      }
      
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // 直接滚动到目标位置
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
      }
    });
  });

  // 图片画廊切换功能
  const thumbnails = document.querySelectorAll('.thumbnail');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
      const parentGallery = this.closest('.about-image-gallery');
      const mainImage = parentGallery.querySelector('.main-image');
      const originalSrc = mainImage.src;
      const originalAlt = mainImage.alt;
      const thumbnailSrc = this.src;
      const thumbnailAlt = this.alt;
      
      // 切换图片和alt属性
      mainImage.style.opacity = '0';
      setTimeout(() => {
        mainImage.src = thumbnailSrc;
        mainImage.alt = thumbnailAlt;
        this.src = originalSrc;
        this.alt = originalAlt;
        mainImage.style.opacity = '1';
      }, 150);
    });
  });

  // ========== 地图功能 ==========
  // ========== 1. 建筑数据（含image字段） ==========
  const HOTSPOT_DATA = [
    {
      id: 1,
      title: "1 号建筑（学生宿舍）",
      description: "南开大学1号学生宿舍，建于1980年代，经过多次翻新改造。宿舍为6层砖混结构，共30间宿舍，可容纳120名学生居住。每间宿舍配备上床下桌、衣柜、空调等基本设施，每层设有公共卫生间、洗衣房和自习室。宿舍楼下设有自行车停放区和快递收发点，交通便利，距离食堂和教学楼仅5分钟步行路程。",
      left: 7.9,
      top: 48.8,
      width: 4,
      height: 5,
      image: "assets/dorm1.jpg"
    },
    {
      id: 2,
      title: "2 号建筑（第二教学楼）",
      description: "第二教学楼是南开大学主要的公共教学楼之一，建成于2005年。建筑共8层，设有大小教室40余间，其中多媒体教室30间，阶梯教室6间，最大教室可容纳300人。教学楼配备中央空调、投影仪、音响等现代化教学设备，是本科生和研究生日常上课的主要场所。楼内设有自习区、饮水间和卫生间，为师生提供便利的教学环境。",
      left: 11.4,
      top: 45.6,
      width: 3.6,
      height: 3.6
    },
    {
      id: 3,
      title: "3 号建筑（计算机学院）",
      description: "计算机学院楼建于2010年，是南开大学计算机科学与技术学院的教学和科研基地。建筑共10层，建筑面积12000平方米。楼内设有专业实验室15个，包括人工智能实验室、网络安全实验室、大数据实验室等，配备先进的实验设备和计算机集群。此外，还设有教师办公室、研究生工作室、学术报告厅等设施，为师生提供良好的教学科研环境。",
      left: 14,
      top: 43,
      width: 4,
      height: 3
    },
    {
      id: 4,
      title: "4 号建筑（图书馆）",
      description: "南开大学图书馆始建于1919年，现馆舍建于2002年，建筑面积3.5万平方米。图书馆馆藏丰富，拥有纸质图书400余万册，电子图书300余万种，中外文数据库100余个。馆内设有阅览区、自习区、研讨室、电子阅览室等功能区域，共提供2000余个阅览座位。图书馆实行全开架借阅制度，每周开放98小时，为师生提供全方位的文献信息服务。",
      left: 15,
      top: 39.1,
      width: 3,
      height: 3,
      image: "https://picsum.photos/id/24/800/500"
    },
    {
      id: 5,
      title: "5 号建筑（主楼）",
      description: "主楼是南开大学的标志性建筑，建成于1954年，2010年进行了整体修缮。建筑风格为典型的苏式建筑，庄重典雅，气势恢宏。主楼共12层，高54米，是南开大学最高的建筑之一。楼内设有学校行政办公室、各学院办公室、会议室、学术报告厅等设施，是学校行政管理和学术交流的中心。主楼前的广场是学校举办重大活动和庆典的场所，也是师生休闲散步的好去处。",
      left: 12.2,
      top: 50,
      width: 4,
      height: 5.5,
      image: "assets/main-building.jpg"
    },
    {
      id: 73,
      title: "学生宿舍",
      description: "这是津南校区 \"大通学生社区\" 下的集中式宿舍集群，共 3 栋楼，每栋 6-8 层，采用 \"庭院围合式\" 布局，楼间设休闲步道与绿植景观。内部配置：宿舍为 4 人间（部分研究生为 2 人间），上床下桌设计，配备空调、独立卫浴、24 小时热水，每间宿舍带宽网接口；每层设公共自习室（配插座、台灯）、洗衣房（含洗衣机、烘干机）、饮水间；楼栋 1 层设宿管站（提供报修、失物招领）、快递柜、自动售货机。服务场景：不仅是住宿空间，也是班级 \"宿舍文化节\"\"夜间卧谈会\" 的场所，部分宿舍区还试点 \"书院制\"，引入导师驻楼、社区活动等功能。",
      left: 60.7,
      top: 26.0,
      width: 6.2,
      height: 3,
      image: "assets/宿舍.jpg"
    },
    {
      id: 74,
      title: "学生宿舍",
      description: "这是津南校区 \"大通学生社区\" 下的集中式宿舍集群，共 3 栋楼，每栋 6-8 层，采用 \"庭院围合式\" 布局，楼间设休闲步道与绿植景观。内部配置：宿舍为 4 人间（部分研究生为 2 人间），上床下桌设计，配备空调、独立卫浴、24 小时热水，每间宿舍带宽网接口；每层设公共自习室（配插座、台灯）、洗衣房（含洗衣机、烘干机）、饮水间；楼栋 1 层设宿管站（提供报修、失物招领）、快递柜、自动售货机。服务场景：不仅是住宿空间，也是班级 \"宿舍文化节\"\"夜间卧谈会\" 的场所，部分宿舍区还试点 \"书院制\"，引入导师驻楼、社区活动等功能。",
      left: 67.7,
      top: 26,
      width: 2.9,
      height: 3.2,
      image: "assets/宿舍.jpg"
    }
  ];

  // ========== 2. 初始化元素和变量 ==========
  const mapContainer = document.querySelector(".map-container");
  const infoTitle = document.getElementById("info-title");
  const infoBody = document.getElementById("info-body");
  const infoImageContainer = document.getElementById("info-image-container");
  const hoverSound = document.getElementById("hover-sound");
  const clickSound = document.getElementById("click-sound");

  let activeHotspot = null;

  // ========== 3. 工具函数 ==========
  function playSound(audioEl) {
    if (!audioEl) return;
    try {
      audioEl.currentTime = 0;
      audioEl.play().catch(e => console.log("音频播放失败:", e));
    } catch (e) {
      // 忽略浏览器自动播放限制报错
    }
  }

  // 拖拽热点功能
  function enableDrag(hotspot, item) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    hotspot.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = parseFloat(hotspot.style.left);
      initialTop = parseFloat(hotspot.style.top);
      hotspot.style.cursor = 'grabbing';
      e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      const newLeft = initialLeft + (deltaX / mapContainer.offsetWidth) * 100;
      const newTop = initialTop + (deltaY / mapContainer.offsetHeight) * 100;
      
      hotspot.style.left = newLeft + '%';
      hotspot.style.top = newTop + '%';
    });

    document.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        hotspot.style.cursor = 'pointer';
        
        // 输出新的位置信息
        const newLeft = parseFloat(hotspot.style.left);
        const newTop = parseFloat(hotspot.style.top);
        console.log(`建筑 ${item.id} 的新位置: left: ${newLeft.toFixed(1)}%, top: ${newTop.toFixed(1)}%`);
        console.log(`更新数据: left: ${newLeft.toFixed(1)}, top: ${newTop.toFixed(1)}, width: ${item.width}, height: ${item.height}`);
      }
    });
  }

  // ========== 4. 生成建筑热点 ==========
  function createHotspots() {
    HOTSPOT_DATA.forEach((item) => {
      const hotspot = document.createElement("div");
      hotspot.className = "hotspot";

      // 设置热点位置和大小
      hotspot.style.left = item.left + "%";
      hotspot.style.top = item.top + "%";
      hotspot.style.width = item.width + "%";
      hotspot.style.height = item.height + "%";
      
      // 设置初始透明度和背景色
      hotspot.style.opacity = "0.4";
      hotspot.style.backgroundColor = "rgba(255, 193, 7, 0.4)";

      // 添加数据属性
      hotspot.dataset.title = item.title;
      hotspot.dataset.description = item.description;
      hotspot.dataset.image = item.image || "";

      // 鼠标悬停效果
      hotspot.addEventListener("mouseenter", () => {
        if (!hotspot.classList.contains("active")) {
          hotspot.style.opacity = "0.6";
          hotspot.style.backgroundColor = "rgba(255, 235, 59, 0.6)";
          hotspot.style.transform = "translateY(-5px)";
          hotspot.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.2)";
          playSound(hoverSound);
        }
      });

      hotspot.addEventListener("mouseleave", () => {
        if (!hotspot.classList.contains("active")) {
          hotspot.style.opacity = "0.4";
          hotspot.style.backgroundColor = "rgba(255, 193, 7, 0.4)";
          hotspot.style.transform = "translateY(0)";
          hotspot.style.boxShadow = "none";
        }
      });

      // 点击事件
      hotspot.addEventListener("click", () => {
        // 如果已有激活的热点，先取消
        if (activeHotspot && activeHotspot !== hotspot) {
          activeHotspot.classList.remove("active");
          activeHotspot.style.opacity = "0.4";
        }
        activeHotspot = hotspot;
        hotspot.classList.add("active");
        hotspot.style.opacity = "0.8";

        // 更新信息面板
        infoTitle.textContent = item.title;
        infoBody.textContent = item.description;

        // 显示建筑图片（如果有）
        if (item.image) {
          infoImageContainer.style.display = "block";
          infoImageContainer.innerHTML = `<img src="${item.image}" alt="${item.title}" class="info-image">`;
        } else {
          infoImageContainer.style.display = "none";
          infoImageContainer.innerHTML = "";
        }

        playSound(clickSound);
      });

      // 启用拖拽功能（调试用）
      enableDrag(hotspot, item);

      // 添加到地图容器
      mapContainer.appendChild(hotspot);
    });
  }

  // ========== 5. 初始化地图 ==========
  function initMap() {
    if (!mapContainer) {
      console.error("找不到地图容器");
      return;
    }
    
    // 清空现有热点
    const existingHotspots = mapContainer.querySelectorAll(".hotspot");
    existingHotspots.forEach(hotspot => hotspot.remove());
    
    // 创建新热点
    createHotspots();
    
    console.log("地图初始化完成，热点数量:", HOTSPOT_DATA.length);
  }

  // ========== 6. 键盘事件处理 ==========
  document.addEventListener("keydown", (e) => {
    // ESC 键取消选择
    if (e.key === "Escape" && activeHotspot) {
      activeHotspot.classList.remove("active");
      activeHotspot.style.opacity = "0.4";
      activeHotspot = null;
      infoTitle.textContent = "操作提示";
      infoBody.textContent = "鼠标移动到地图上某栋建筑区域，会看到该建筑发光浮起；点击后高亮会一直存在，并在右侧显示对应文字介绍。按 Esc 取消当前选择。";
      infoImageContainer.style.display = "none";
      infoImageContainer.innerHTML = "";
    }
  });

  // 获取地图板块元素
  const mapSection = document.getElementById('map');
  
  // 当切换到地图板块时初始化地图
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (mapSection.classList.contains('active')) {
          // 如果地图板块变为激活状态，初始化地图
          setTimeout(() => {
            initMap();
          }, 100);
        }
      }
    });
  });

  // 观察地图板块的 class 属性变化
  observer.observe(mapSection, { attributes: true });
});