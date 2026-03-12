// Оптимизация изображений и поддержка современных форматов
document.addEventListener('DOMContentLoaded', function() {
    // Проверка поддержки WebP
    checkWebPSupport();
    
    // Адаптивные изображения
    setupResponsiveImages();
    
    // Ленивая загрузка
    setupLazyLoading();
});

function checkWebPSupport() {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
        const isSupported = (webP.height === 2);
        document.documentElement.classList.toggle('webp', isSupported);
        document.documentElement.classList.toggle('no-webp', !isSupported);
        
        if (isSupported) {
            console.log('WebP format supported');
        }
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

function setupResponsiveImages() {
    // Создаем адаптивные изображения для разных размеров экрана
    const images = document.querySelectorAll('img[data-responsive]');
    
    images.forEach(img => {
        const baseSrc = img.src || img.dataset.src;
        const baseName = baseSrc.split('.').slice(0, -1).join('.');
        const extension = baseSrc.split('.').pop();
        
        // Создаем picture элемент для адаптивности
        const picture = document.createElement('picture');
        
        // WebP версии для современных браузеров
        const webpSource = document.createElement('source');
        webpSource.type = 'image/webp';
        webpSource.srcset = `
            ${baseName}-small.webp 480w,
            ${baseName}-medium.webp 768w,
            ${baseName}-large.webp 1200w
        `;
        webpSource.sizes = '(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px';
        
        // Fallback для браузеров без поддержки WebP
        const fallbackSource = document.createElement('source');
        fallbackSource.srcset = `
            ${baseName}-small.${extension} 480w,
            ${baseName}-medium.${extension} 768w,
            ${baseName}-large.${extension} 1200w
        `;
        fallbackSource.sizes = '(max-width: 480px) 480px, (max-width: 768px) 768px, 1200px';
        
        // Клонируем оригинальное изображение
        const newImg = img.cloneNode(true);
        newImg.removeAttribute('data-responsive');
        
        // Собираем picture элемент
        picture.appendChild(webpSource);
        picture.appendChild(fallbackSource);
        picture.appendChild(newImg);
        
        // Заменяем оригинальное изображение
        img.parentNode.replaceChild(picture, img);
    });
}

function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    loadImage(img);
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });

        // Наблюдаем за всеми изображениями с data-src
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback для старых браузеров
        document.querySelectorAll('img[data-src]').forEach(loadImage);
    }
}

function loadImage(img) {
    if (img.dataset.src) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        img.classList.add('loaded');
        
        // Удаляем data-src после загрузки
        img.removeAttribute('data-src');
        
        // Добавляем обработчик ошибок
        img.onerror = function() {
            this.classList.add('error');
            console.warn('Failed to load image:', this.src);
        };
        
        img.onload = function() {
            this.classList.add('loaded');
        };
    }
}

// Функция для предзагрузки критических изображений
function preloadCriticalImages() {
    const criticalImages = [
        'images/logo.png',
        'images/paris.jpg',
        'images/switzerland.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Запускаем предзагрузку критических изображений
preloadCriticalImages();