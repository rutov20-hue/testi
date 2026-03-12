// Мобильное меню
function toggleMobileMenu() {
    const navList = document.getElementById('navList');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (navList) {
        navList.classList.toggle('active');
        
        // Изменяем иконку меню
        if (navList.classList.contains('active')) {
            menuBtn.innerHTML = '✕';
            menuBtn.setAttribute('aria-expanded', 'true');
        } else {
            menuBtn.innerHTML = '☰';
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    }
}

// Закрытие меню при клике на ссылку
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navList = document.getElementById('navList');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navList && navList.classList.contains('active')) {
                navList.classList.remove('active');
                if (menuBtn) {
                    menuBtn.innerHTML = '☰';
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            }
        });
    });
    
    // Закрытие меню при клике вне его
    document.addEventListener('click', function(event) {
        const navigation = document.querySelector('.navigation');
        
        if (navList && navList.classList.contains('active') && 
            !navigation.contains(event.target)) {
            navList.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = '☰';
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Закрытие меню при изменении размера экрана
    window.addEventListener('resize', function() {
        if (window.innerWidth > 479 && navList && navList.classList.contains('active')) {
            navList.classList.remove('active');
            if (menuBtn) {
                menuBtn.innerHTML = '☰';
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Улучшение производительности на мобильных устройствах
document.addEventListener('DOMContentLoaded', function() {
    // Отключение hover эффектов на touch устройствах
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Оптимизация скролла для iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
        document.body.style.webkitOverflowScrolling = 'touch';
    }
    
    // Предотвращение зума при двойном тапе на iOS
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
});