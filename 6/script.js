document.addEventListener('DOMContentLoaded', function() {
    // 獲取所有班級按鈕和作品容器
    const classButtons = document.querySelectorAll('.class-btn');
    const worksContainers = document.querySelectorAll('.works-container');
    
    // 為每個班級按鈕添加點擊事件
    classButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 獲取當前點擊的班級ID
            const targetClass = this.getAttribute('data-class');
            
            // 移除所有按鈕的active類
            classButtons.forEach(btn => btn.classList.remove('active'));
            
            // 為當前點擊的按鈕添加active類
            this.classList.add('active');
            
            // 隱藏所有作品容器
            worksContainers.forEach(container => {
                container.classList.remove('active');
            });
            
            // 顯示對應的作品容器
            document.getElementById(targetClass).classList.add('active');
            
            // 使用較少的動畫效果滾動到作品區域
            document.getElementById(targetClass).scrollIntoView({
                behavior: 'auto', // 改為 auto 以減少動畫
                block: 'start'
            });
        });
    });
    
    // 簡化作品項的懸停效果
    const workItems = document.querySelectorAll('.work-item');
    workItems.forEach(item => {
        // 使用 CSS 類來處理懸停效果，而不是直接操作樣式
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 添加組別標題點擊效果，可以展開/收起該組作品
    const groupHeaders = document.querySelectorAll('.group-header');
    groupHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const nextGrid = this.nextElementSibling;
            
            if (nextGrid.style.display === 'none') {
                nextGrid.style.display = 'grid';
                this.classList.remove('collapsed');
            } else {
                nextGrid.style.display = 'none';
                this.classList.add('collapsed');
            }
        });
        
        // 簡化鼠標懸停效果，使用 CSS 類
        header.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        header.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 添加頁面載入動畫 - 簡化版本
    document.body.classList.add('loaded');
    
    // 延遲加載YouTube影片以提高頁面載入速度
    const videoFrames = document.querySelectorAll('iframe');
    
    // 使用更簡單的延遲加載方法
    const lazyLoadVideos = () => {
        videoFrames.forEach(frame => {
            const src = frame.getAttribute('src');
            if (src) {
                frame.setAttribute('data-src', src);
                frame.removeAttribute('src');
            }
        });
        
        // 只在視窗滾動時檢查一次
        window.addEventListener('scroll', () => {
            videoFrames.forEach(frame => {
                const rect = frame.getBoundingClientRect();
                const isInViewport = (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
                
                if (isInViewport) {
                    const dataSrc = frame.getAttribute('data-src');
                    if (dataSrc) {
                        frame.src = dataSrc;
                        frame.removeAttribute('data-src');
                    }
                }
            });
        }, { passive: true }); // 使用 passive 選項提高滾動性能
    };
    
    lazyLoadVideos();
    
    // 簡化頁面載入動畫
    const fadeElements = document.querySelectorAll('.fade-in');
    setTimeout(() => {
        fadeElements.forEach(element => {
            element.classList.add('visible');
        });
    }, 100);
    
    // 優化滾動效能 - 使用更簡單的方法
    const backToTopBtn = document.createElement('button');
    backToTopBtn.id = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.title = '回到頂部';
    document.body.appendChild(backToTopBtn);
    
    // 使用 throttle 函數來限制滾動事件的觸發頻率
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            isScrolling = true;
            setTimeout(() => {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
                isScrolling = false;
            }, 100); // 100ms 的節流時間
        }
    }, { passive: true });
    
    // 添加點擊事件
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto' // 使用 auto 而不是 smooth 以減少動畫
        });
    });
}); 