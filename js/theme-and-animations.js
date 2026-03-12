// Переключение темы
document.addEventListener('DOMContentLoaded', function() {
    // Создаем кнопку переключения темы
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.setAttribute('aria-label', 'Переключить тему');
    themeToggle.innerHTML = '🌙';
    document.body.appendChild(themeToggle);
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '☀️';
    }
    
    // Обработчик переключения темы
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.innerHTML = '☀️';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '🌙';
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Анимация при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Добавляем классы анимации к элементам
    const animateElements = document.querySelectorAll('.travel-card, .hero, .world-map-section, .travel-detail');
    animateElements.forEach((el, index) => {
        el.classList.add('scroll-animate');
        // Добавляем задержку для последовательной анимации
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
    
    // Анимация для карточек с разных сторон
    const cards = document.querySelectorAll('.travel-card');
    cards.forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.remove('scroll-animate');
            card.classList.add('scroll-animate-left');
        } else {
            card.classList.remove('scroll-animate');
            card.classList.add('scroll-animate-right');
        }
    });
    
    // Кнопка "Наверх"
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.setAttribute('aria-label', 'Прокрутить наверх');
    scrollTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollTopBtn);
    
    // Показываем/скрываем кнопку при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    // Быстрая плавная прокрутка наверх при клике
    scrollTopBtn.addEventListener('click', function() {
        const scrollDuration = 400; // Длительность анимации в миллисекундах (быстрая)
        const scrollStep = -window.scrollY / (scrollDuration / 15);
        
        const scrollInterval = setInterval(function() {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    });
});
