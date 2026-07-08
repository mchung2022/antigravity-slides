document.addEventListener('DOMContentLoaded', () => {
  const slides = window.slidesData;
  if (!slides || slides.length === 0) {
    console.error('投影片資料載入失敗！');
    return;
  }

  let currentIdx = 0;

  // DOM 元素選取
  const slideCard = document.getElementById('slide-card');
  const slideHeader = document.getElementById('slide-header');
  const slideContent = document.getElementById('slide-content');
  const sectionTag = document.getElementById('section-tag');
  const indexTag = document.getElementById('index-tag');
  
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const progressBar = document.getElementById('progress-bar');
  const sectionIndicator = document.getElementById('section-indicator');
  
  const btnTheme = document.getElementById('btn-theme');
  const btnOutline = document.getElementById('btn-outline');
  const btnHelp = document.getElementById('btn-help');
  const btnFullscreen = document.getElementById('btn-fullscreen');
  
  const sidebar = document.getElementById('outline-sidebar');
  const sidebarList = document.getElementById('sidebar-list');
  const btnCloseSidebar = document.getElementById('btn-close-sidebar');
  const searchInput = document.getElementById('search-input');
  
  const modalHelp = document.getElementById('modal-help');
  const btnCloseModal = document.getElementById('btn-close-modal');

  // --- 投影片渲染核心邏輯 ---
  function renderSlide(index) {
    if (index < 0 || index >= slides.length) return;
    
    // 移除活躍狀態以觸發淡出/退場動畫
    slideCard.classList.remove('active');
    
    // 稍微延遲寫入，讓淡出動畫表現出來
    setTimeout(() => {
      currentIdx = index;
      const slide = slides[currentIdx];
      
      // 更新頁首區段標章與頁碼
      sectionTag.textContent = slide.section;
      indexTag.textContent = `${String(currentIdx + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      
      // 替換投影片內容
      slideContent.innerHTML = slide.contentHtml;
      
      // 根據版面配置調整卡片樣式與主標題顯示
      slideCard.className = `slide-card layout-${slide.layout}`;
      if (slide.layout === 'title' || slide.layout === 'chapter') {
        slideHeader.style.display = 'none'; // 標題與章節頁隱藏頂部欄
      } else {
        slideHeader.style.display = 'flex';
      }
      
      // 更新控制按鈕狀態
      btnPrev.disabled = currentIdx === 0;
      btnNext.disabled = currentIdx === slides.length - 1;
      
      // 更新進度條與底部署名
      const progressPercent = (currentIdx / (slides.length - 1)) * 100;
      progressBar.style.width = `${progressPercent}%`;
      sectionIndicator.textContent = `當前章節：${slide.section}`;
      
      // 觸發進場動畫
      slideCard.classList.add('active');
      
      // 更新大綱清單的活躍狀態
      updateSidebarActiveItem();
    }, 100);
  }

  // --- 大綱導覽側邊欄 ---
  function initSidebar() {
    sidebarList.innerHTML = '';
    slides.forEach((slide, idx) => {
      const li = document.createElement('li');
      li.className = 'sidebar-item';
      li.dataset.index = idx;
      
      li.innerHTML = `
        <span class="sidebar-item-num">${idx + 1}</span>
        <div class="sidebar-item-info">
          <div class="sidebar-item-title">${slide.title}</div>
          <div class="sidebar-item-section">${slide.section}</div>
        </div>
      `;
      
      li.addEventListener('click', () => {
        renderSlide(idx);
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
        }
      });
      sidebarList.appendChild(li);
    });
  }

  function updateSidebarActiveItem() {
    const items = sidebarList.querySelectorAll('.sidebar-item');
    items.forEach((item, idx) => {
      if (idx === currentIdx) {
        item.classList.add('active');
        // 自動捲動到可視範圍
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        item.classList.remove('active');
      }
    });
  }

  // 大綱關鍵字搜尋過濾
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    const items = sidebarList.querySelectorAll('.sidebar-item');
    
    items.forEach((item, idx) => {
      const slide = slides[idx];
      const matchTitle = slide.title.toLowerCase().includes(query);
      const matchSection = slide.section.toLowerCase().includes(query);
      
      if (matchTitle || matchSection) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // --- 主題切換 (Theme Toggle) ---
  function initTheme() {
    const savedTheme = localStorage.getItem('antigravity-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('antigravity-theme', newTheme);
    updateThemeIcon(newTheme);
  }

  function updateThemeIcon(theme) {
    if (theme === 'light') {
      btnTheme.innerHTML = '🌙'; // 顯示月亮代表可切換回深色
      btnTheme.title = '切換至深色模式';
    } else {
      btnTheme.innerHTML = '☀️'; // 顯示太陽代表可切換回淺色
      btnTheme.title = '切換至淺色模式';
    }
  }

  // --- 全螢幕播放 (Fullscreen) ---
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error(`無法啟動全螢幕模式: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  }

  // --- 事件監聽器設定 ---
  btnPrev.addEventListener('click', () => renderSlide(currentIdx - 1));
  btnNext.addEventListener('click', () => renderSlide(currentIdx + 1));
  
  btnTheme.addEventListener('click', toggleTheme);
  
  btnOutline.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });
  
  btnCloseSidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
  
  btnHelp.addEventListener('click', () => {
    modalHelp.classList.add('open');
  });
  
  btnCloseModal.addEventListener('click', () => {
    modalHelp.classList.remove('open');
  });
  
  modalHelp.addEventListener('click', (e) => {
    if (e.target === modalHelp) {
      modalHelp.classList.remove('open');
    }
  });

  btnFullscreen.addEventListener('click', toggleFullscreen);

  // 鍵盤操控支援
  document.addEventListener('keydown', (e) => {
    if (document.activeElement.tagName === 'INPUT') return; // 如果正在輸入搜尋框則忽略鍵盤控制簡報
    
    switch(e.key) {
      case 'ArrowRight':
      case ' ':
      case 'PageDown':
        if (currentIdx < slides.length - 1) {
          renderSlide(currentIdx + 1);
          e.preventDefault();
        }
        break;
      case 'ArrowLeft':
      case 'PageUp':
        if (currentIdx > 0) {
          renderSlide(currentIdx - 1);
          e.preventDefault();
        }
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      case 'o':
      case 'O':
        sidebar.classList.toggle('open');
        break;
      case 'h':
      case 'H':
      case '?':
        modalHelp.classList.toggle('open');
        break;
      case 'Escape':
        modalHelp.classList.remove('open');
        sidebar.classList.remove('remove');
        break;
    }
  });

  // 滑鼠滾輪切換支援
  let lastWheelTime = 0;
  window.addEventListener('wheel', (e) => {
    // 限制滾輪觸發頻率，避免一次滾動切換太多頁
    const now = Date.now();
    if (now - lastWheelTime < 1000) return;
    
    // 如果滑鼠是在大綱側邊欄內滾動，則不觸發切換投影片
    if (sidebar.contains(e.target)) return;

    if (e.deltaY > 50) {
      if (currentIdx < slides.length - 1) {
        renderSlide(currentIdx + 1);
        lastWheelTime = now;
      }
    } else if (e.deltaY < -50) {
      if (currentIdx > 0) {
        renderSlide(currentIdx - 1);
        lastWheelTime = now;
      }
    }
  });

  // --- 初始化流程 ---
  initTheme();
  initSidebar();
  renderSlide(0);
});
